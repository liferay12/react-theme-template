import {Route, Routes } from "react-router-dom";

export const Content = (props) => {

  return (
    <>
      <Routes>
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
                        element={subItem.subComponent}
                      />
                      {console.log(subItem.path + " : " + subItem.subComponent)}
                    </>
                  ))
                ) : (
                  <Route
                    key={i}
                    exact
                    path={item.path}
                    element={item.component}
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
