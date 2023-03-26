import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export const Content = (props) => {
    return (
        <>
            <Router>
                <Routes>
                    {props.data.map((section) => (
                        <>
                            {section.option.map((item) => (
                                <>
                                    {
                                        item.subItem.length != 0 ? (
                                            <Route
                                                exact
                                                path={item.path}
                                                element={item.component}
                                            />
                                        ) : (

                                            <Route
                                                exact
                                                path={item.path}
                                                element={item.component}
                                            />

                                            // item.subItem.map((subItem) =>
                                            //     <>

                                            //         <h2>HEllollllllll</h2>
                                            //     </>
                                            // )



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