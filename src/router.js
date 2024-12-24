class Router {
    constructor(routeViewEl, routes, rootPath = '/') {
        this.routeViewEl = routeViewEl
        this.rootPath = rootPath
        this.routes = routes
        this.routerCache = new Map()

        this.handlePopstate = this.handlePopstate.bind(this)
        this.#init()
        this.#renderPage()
    }

    get path() {
        return window.location.hash.replace('#', '') || this.rootPath
    }

    get route() {
        return this.routes.find((i) => i.path === this.path)
    }

    #init() {
        addEventListener('popstate', this.handlePopstate)
    }

    cleanup() {
        removeEventListener('popstate', this.handlePopstate)
    }

    async #getPageComponent() {
        if (this.routerCache.has(this.route.name)) {
            return this.routerCache.get(this.route.name)
        }

        await import(this.route.component)
        const component = document.createElement(`${this.route.name}-page`)
        this.routerCache.set(this.route.name, component)

        return component
    }

    async #renderPage() {
        const component = await this.#getPageComponent()
        this.routeViewEl.innerHTML = ''
        this.routeViewEl.appendChild(component)
    }

    handlePopstate() {
        this.#renderPage()
    }

    push() {
        history.pushState(null, '', '#/path')
    }
}

export function createRouter(routeViewEl, routes) {
    return new Router(routeViewEl, routes)
}
