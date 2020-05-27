import {Router} from "./Router";
import {Page} from "../Page";

class Dashboard extends Page {
    getRoot() {
        const root = document.createElement('div')
        root.innerHTML = 'dashboard'
        console.log("root", root)
        return root
    }
}

class ExcelPage extends Page {
}

describe('Router', () => {
    let router
    let $root = document.createElement('div')
    beforeEach(() => {
        $root =
            router = new Router($root, {
                dashboard: Dashboard,
                excel: ExcelPage
            })
    })
    test('router should be define', () => {
        expect(router).toBeDefined()
    })

    test('should render DashboardPage', () => {
        router.changePageHandler()

        expect($root.innerHTML).toBe('<div>dashboard</div>')
    })
})