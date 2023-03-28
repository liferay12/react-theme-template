import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const Content = (props) => {


    var handleConverterTheme = function () {

        alert("-1-");
    }

    return (
        <>
            <Router>
                <Routes>
                    {props.data.map((section) => (
                        <>
                            {section.option.map((item, i) => (
                                <>
                                    {
                                        item.subItem.length != 0 ? (
                                            item.subItem.map((subItem, j) =>
                                                <>

                                                    <Route key={j}
                                                        exact
                                                        path={subItem.path}
                                                        element={subItem.subComponent}

                                                    />
                                                    {
                                                        console.log(subItem.path + " : " + subItem.subComponent)
                                                    }
                                                </>
                                            )
                                        ) : (

                                            <Route key={i}
                                                exact
                                                path={item.path}
                                                element={item.component}

                                            />





                                        )
                                    }
                                </>
                            ))}
                        </>
                    ))}

                    {/* <Route exact path="/page1" element={<Test1></Test1>} />
                    <Route exact path="/page2" element={<h1>Hello sgjhdjx fgvjshmdxkf,v</h1>} />
                    <Route exact path="/page3" element={""} /> */}
                </Routes>
            </Router>
        </>
    );
}