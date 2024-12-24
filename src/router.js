import { ERROR_ROUTE } from './constants.js'

class Router {
    constructor(routeViewEl, routes) {
        this.routeViewEl = routeViewEl
        this.routes = routes
        this.routerCache = new Map()
        this.onRouteChange = null

        this.handlePopstate = this.handlePopstate.bind(this)
    }

    get path() {
        return window.location.hash.replace('#', '') || '/'
    }

    get route() {
        return this.routes.find((i) => i.path === this.path) || ERROR_ROUTE
    }

    init() {
        addEventListener('popstate', this.handlePopstate)
        this.#renderPage()
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

        if (this.onRouteChange) {
            this.onRouteChange(this.route)
        }
    }

    handlePopstate() {
        this.#renderPage()
    }

    push(path) {
        const route = this.routes.find((i) => i.path === path) || ERROR_ROUTE
        console.log({ path, route })
        history.pushState(null, '', `#${route.path}`)
        this.#renderPage()
    }

    go(delta) {
        history.go(delta)
    }
}

export function createRouter(routeViewEl, routes) {
    return new Router(routeViewEl, routes)
}
