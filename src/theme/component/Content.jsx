import { Route, Routes } from "react-router-dom";
import { UrlProtect } from "../Service/UrlProtect";
import { Login } from "./Login";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";


export const Content = (props) => {

  return (
    <>
      <Routes>
        <Route

          exact
          path={'/login'}
          element={<UrlProtect Component={Login} />}
        />
        {/*
        <Route

          exact
          path={'/signup'}
          element={<UrlProtect Component={SignUp} />}
        /> */}
        {props.data.map((section) => (
          <>
            {section.option.map((item, i) => (
              <>
                {item.subItem.length != 0 ? (
                  item.subItem.map((subItem, j) => (
                    <>
                      <Route
                        key={j}
                        exact
                        path={subItem.path}
                        element={<UrlProtect Component={subItem.subComponent} />}
                      />

                    </>
                  ))
                ) : (
                  <Route
                    key={i}
                    exact
                    path={item.path}
                    element={<UrlProtect Component={item.component} />}
                  />
                )}
              </>
            ))}
          </>
        ))}
      </Routes>
    </>
  );
};
