const ERROR_ROUTE = {
    name: 'error',
    path: '/error',
    component: '/my-cv/src/pages/error.page.js',
}

export class Router {
    constructor(routeViewEl, routes) {
        this.routeViewEl = routeViewEl
        this.routes = routes
        this.listeners = new Set()
        this.pagesCache = new Map()
        this.routesMap = new Map()

        this.createRouteMap(routes)
        this.handlePopstate = this.handlePopstate.bind(this)
    }

    get path() {
        return window.location.hash.replace('#', '')
    }

    get breadcrumbs() {
        return this.routesMap.has(this.path) ? this.path.split('/').filter(Boolean) : []
    }

    get currentRoute() {
        if (!this.path) {
            return this.routesMap.get('/')
        }

        return this.routesMap.get(this.path) || ERROR_ROUTE
    }

    get parentPath() {
        return this.currentRoute?.parent
    }

    get siblings() {
        if (!this.parentPath) {
            return []
        }

        return Array.from(this.routesMap.values()).filter((route) => route.parent === this.parentPath)
    }

    async init() {
        addEventListener('popstate', this.handlePopstate)
        await this.navigate()
    }

    handlePopstate() {
        this.navigate().catch(console.error)
    }

    createRouteMap(items, path = '') {
        for (const item of items) {
            const key = path ? `${path}${item.path}` : item.path
            item.parent = path

            if (this.routesMap.has(key)) {
                throw new Error(`Route already exists: ${key}`)
            }

            this.routesMap.set(key, item)

            if (item.children) {
                this.createRouteMap(item.children, item.path)
            }
        }
    }

    async getPageComponent() {
        if (!this.currentRoute) {
            return ERROR_ROUTE
        }

        if (this.pagesCache.has(this.currentRoute.path)) {
            return this.pagesCache.get(this.currentRoute.path)
        }

        if (!this.currentRoute?.component) {
            return null
        }

        await import(new URL(this.currentRoute.component, import.meta.url))
        const component = document.createElement(`${this.currentRoute.name}-page`)

        this.pagesCache.set(this.currentRoute.path, component)

        return component
    }

    async navigate() {
        this.routeViewEl.innerHTML = ''

        const component = await this.getPageComponent()
        if (component) {
            this.routeViewEl.appendChild(component)
        }

        this.listeners.forEach((listener) => listener(this.currentRoute))
    }

    subscribe(listener) {
        this.listeners.add(listener)
    }

    unsubscribe(listener) {
        this.listeners.delete(listener)
    }

    push(path) {
        if (this.currentRoute.path !== path) {
            history.pushState(null, '', `#${path}`)
            this.navigate()
        }
    }
}
