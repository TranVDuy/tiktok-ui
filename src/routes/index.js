// layouts
import { HeaderOnly } from '~/components/Layout'
// import { DefaultLayout } from '~/components/Layout'

// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

// public route
const publicRoute = [
    { path: '/', component: Home  },
    { path: '/following', component: Following},
    { path: '/@:nickname', component: Profile},
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
]


export { publicRoute }