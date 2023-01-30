import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from "./routes";

import react from "../icons/react.svg";
import pwa from "../icons/pwa.svg";
import plus from "../icons/plus.svg";

import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout" >
          <nav style={{ overflowY: "hidden", width: '350px', marginRight: '0' }}>
            <div style={{alignItems: 'center', display: 'flex', placeContent: 'center', marginTop: '20px', marginBottom: '20px'}}>
              <img src={react} alt="React Logo" style={{width: '75px', margin: '5px',}}/>
              <img src={plus} alt="+" style={{width: '20px',}}/>
              <img src={pwa} alt="PWA Logo" style={{width: '100px', margin: '5px'}}/>
            </div>


            <ul style={{alignItems: 'flex-start', paddingLeft: '15px'}}>
              {routes.map((route) => (
                <li key={route.to}>
                  <NavLink
                    className={( {isActive} ) => (isActive ? "nav-active" : "")}
                    to={route.to}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
