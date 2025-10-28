import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import VegetableSeedsPage from './Pages/VegetableSeedsPage'
import ProductDetail from './Pages/ProductDetail'
import TypesOfVegetableSeedsPage from './Pages/TypesOfVegetableSeedsPage'
import VegetableSeedsSeasonWisePage from './Pages/VegetableSeedsSeasonWisePage'
import VegetableSeedsComboPage from './Pages/VegetableSeedsComboPage'
import FlowerSeedsPage from './Pages/FlowerSeedsPage'
import FlowerSeedsOpDesiPage from './Pages/FlowerSeedsOpDesiPage'
import FlowerSeedsHybridPage from './Pages/FlowerSeedsHybridPage'
import FloweringTreeShrubSeedsPage from "./Pages/FloweringTreeShrubSeedsPage"
import FragrantFlowerSeedsPage from './Pages/FragrantFlowerSeedsPage'
import AnnualFlowerSeedsPage from './Pages/AnnualFlowerSeedsPage'
import PerennialFlowerSeedsPage from './Pages/PerennialFlowerSeedsPage'
import TreeSeedsPage from './Pages/TreeSeedsPage'
import FruitSeedsPage from './Pages/FruitSeedsPage'
import GrassSeedsPage from './Pages/GrassSeedsPage'
import SeedBallsPage from './Pages/SeedBallsPage'
import PalmSeedsPage from './Pages/PalmSeedsPage'
import AvenueTreeSeedsPage from './Pages/AvenueTreeSeedsPage'
import ConiferSeedsPage from './Pages/ConiferSeedsPage'
import ShrubSeedsPage from './Pages/ShrubSeedsPage'
import HerbSeedsPage from './Pages/HerbSeedsPage'
import HerbSeedsOpDesiPage from './Pages/HerbSeedsOpDesiPage'
import HerbSeedsOrganicPage from './Pages/HerbSeedsOrganicPage'
import HerbSeedsHeirloomPage from './Pages/HerbSeedsHeirloomPage'
import HerbSeedsHybridPage from './Pages/HerbSeedsHybridPage'
import AromaticHerbSeedsPage from './Pages/AromaticHerbSeedsPage'
import CulinaryHerbSeedsPage from './Pages/CulinaryHerbSeedsPage'
import SeedsBySeasonPage from './Pages/SeedsBySeasonPage'
import AllSeasonSeedsPage from './Pages/AllSeasonSeedsPage'
import WinterSeedsPage from './Pages/WinterSeedsPage'
import SummerSeedsPage from './Pages/SummerSeedsPage'
import AgricultureSeedsPage from './Pages/AgricultureSeedsPage'
import HybridSeedsPage from './Pages/HybridSeedsPage'
import ShopPage from './Pages/ShopPage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import LoginPage from './Pages/LoginPage'
import ForgotPasswordPage from './Pages/ForgotPasswordPage'
import SignupPage from './Pages/SignupPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import ShippingPolicyPage from './Pages/ShippingPolicyPage'
import CartPage from './Pages/CartPage'
import CheckoutPage from './Pages/CheckoutPage'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/seeds/vegetable",
          element: <VegetableSeedsPage />
        },
        {
          path: "/product/:productId",
          element: <ProductDetail />
        },
        {
          path: "/seeds/vegetable/types-of-vegetable-seeds",
          element: <TypesOfVegetableSeedsPage />
        },
        {
          path: "/seeds/vegetable/vegetable-seeds-season-wise",
          element: <VegetableSeedsSeasonWisePage />
        },
        {
          path: "/seeds/vegetable/vegetables-seeds-combo",
          element: <VegetableSeedsComboPage />
        },
        {
          path: "/seeds/flower",
          element: <FlowerSeedsPage />
        },
        {
          path: "/seeds/flower/flower-seeds-opdesi",
          element: <FlowerSeedsOpDesiPage />
        },
        {
          path: "/seeds/flower/flower-seeds-hybrid",
          element: <FlowerSeedsHybridPage />
        },
        {
          path: "/seeds/flower/flowering-tree-and-shrub-seeds",
          element: <FloweringTreeShrubSeedsPage />
        },
        {
          path: "/seeds/flower/fragrant-flower-seeds", // Your specified path
          element: <FragrantFlowerSeedsPage />
        },
        {
          path: "/seeds/flower/annual-flower-seeds",
          element: <AnnualFlowerSeedsPage />
        },
        {
          path: "/seeds/flower/perennial-flower-seeds",
          element: <PerennialFlowerSeedsPage />
        },
        {
          path: "/seeds/tree",
          element: <TreeSeedsPage />
        },
        {
          path: "/seeds/tree/fruit-seeds",
          element: <FruitSeedsPage />
        },
        {
          path: "/seeds/tree/grass-seeds",
          element: <GrassSeedsPage />
        },
        {
          path: "/seeds/tree/seed-balls",
          element: <SeedBallsPage />
        },
        {
          path: "/seeds/tree/palm-seeds",
          element: <PalmSeedsPage />
        }, {
          path: "/seeds/tree/avenue-tree-seeds",
          element: <AvenueTreeSeedsPage />
        },
        {
          path: "/seeds/tree/conifer-seeds",
          element: <ConiferSeedsPage />
        },
        {
          path: "/seeds/tree/shrub-seeds",
          element: <ShrubSeedsPage />
        },
        {
          path: "/seeds/herb",
          element: <HerbSeedsPage />
        },

        {
          path: "/seeds/herb/herb-seeds-op--desi",
          element: <HerbSeedsOpDesiPage />
        },
        {
          path: "/seeds/herb/herb-seeds-organic",
          element: <HerbSeedsOrganicPage />
        },
        {
          path: "/seeds/herb/herb-seeds-heirloom",
          element: <HerbSeedsHeirloomPage />
        },
        {
          path: "/seeds/herb/herb-seeds-hybrid",
          element: <HerbSeedsHybridPage />
        },
        {
          path: "/seeds/herb/aromatic-herb-seeds",
          element: <AromaticHerbSeedsPage />
        },
        {
          path: "/seeds/herb/culinary-herb-seeds",
          element: <CulinaryHerbSeedsPage />
        },
        {
          path: "/seeds/season",
          element: <SeedsBySeasonPage />
        },
        {
          path: "/seeds/season/all-season-seeds",
          element: <AllSeasonSeedsPage />
        },
        {
          path: "/seeds/season/winter-seeds",
          element: <WinterSeedsPage />
        },
        {
          path: "/seeds/season/summer-seeds",
          element: <SummerSeedsPage />
        },
        {
          path: "/seeds/agriculture",
          element: <AgricultureSeedsPage />
        },
        {
          path: "/seeds/hybrid",
          element: <HybridSeedsPage />
        },
        {
          path: "/shop",
          element: <ShopPage />
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
        {
          path: "/privacy",
          element: <PrivacyPolicyPage />
        },
        {
          path: "/shipping",
          element: <ShippingPolicyPage />
        },
        {
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "/checkout",
          element: <CheckoutPage />
        },
      ]
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />
    },
    {
      path: "/signup",
      element: <SignupPage />
    },
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App