import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoute } from '~/routes'
import { DefaultLayout } from '~/components/Layout'


function App() {
  return (
    <Router>
      <Routes>
        {
          publicRoute.map((route, index) => {
            // const Layout = route.layout === null ? Fragment : route.layout
            let Layout = DefaultLayout

            if(route.layout != null){
              Layout = route.layout
            }
            else{
              if(route.layout === null)
                Layout = Fragment
            }

            const Page = route.component
            return <Route key={index} path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          })}
      </Routes>
    </Router>
  );
}

export default App;
