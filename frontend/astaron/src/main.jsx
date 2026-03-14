//React-Router importation
import {createBrowserRouter, RouterProvider} from "react-router-dom";


import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import ExplantionPage from './Astaron/pages/unlogedUserPages/ExplantionPage';
import { SignUp } from "./Astaron/components/signing/SignUp";
import { SingIn } from "./Astaron/components/signing/SingIn";
import { DocumentsList } from "./Astaron/components/subscribedUserComponents/documentsComponents/DocumentsList";
import { Document } from "./Astaron/components/subscribedUserComponents/documentsComponents/Document";
import { FlashcardsList } from "./Astaron/components/subscribedUserComponents/flashcardsComponents/FlashcardsList";
import { Flashcard } from "./Astaron/components/subscribedUserComponents/flashcardsComponents/Flashcard";
import { QuizesList } from "./Astaron/components/subscribedUserComponents/quizComponents/QuizesList";
import { UserDashboard } from "./Astaron/pages/logedUserPages/subscribedUserPages/UserDashboardPage/UserDashboard";
import { ManageSubscribtion } from "./Astaron/components/subscribedUserComponents/UserDashboardComponents/manageSubscribtion";
import { SubscribtionsList } from "./Astaron/pages/logedUserPages/unSubscribedUserPages/SubscribtionsList";
import { Quiz } from "./Astaron/components/subscribedUserComponents/quizComponents/Quiz";
import { Auth } from "./Astaron/pages/unlogedUserPages/auth";
import { Astaron } from "./Astaron/pages/logedUserPages/subscribedUserPages/Astaron";
import { Home } from "./Astaron/components/home/Home";
import { ChangePassword } from "./Astaron/components/subscribedUserComponents/UserDashboardComponents/ChangePassword";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ExplantionPage />,
  },

  //Auth
  {
    path: "auth",
    element: <Auth />,
    children: [
      {path: "sign-up", element: <SignUp />},
      {path: "sign-in", element: <SingIn />}
    ]
  },

  //Create Subscription
  {
    path: "subscribtion/create",
    element: <SubscribtionsList />,
},

  //Astaron App
  {
    path: "astaron",
    element: <Astaron />,
    children: [
      //Home
      {
        path: "home",
        element: <Home />
      },
      //Documents
      {
        path: "documents",
        element: <DocumentsList />,
      },
      {
        path: "documents/:docId",
        element: <Document />
        },


        //Flashcards
        {
          path: "flashcards",
          element: <FlashcardsList />,
        },
        {
          path: "flashcards/:fcId", 
          element: <Flashcard />
        },


          //Quizes
        {
          path: "quizes",
          element: <QuizesList />,
        },
        {
          path: "quizes/:qzId", 
          element: <Quiz />
        }
      
    ]
  },

  //Dashboard
  {
    path: "dashboard", element: <UserDashboard />, 
    children: [
      {
        path: "change-password",
        element: <ChangePassword />
      },
      {
        path: "manage-subscribtion",
        element: <ManageSubscribtion />
      }
  ]},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)
