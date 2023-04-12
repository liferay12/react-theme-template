import axios from 'axios';
import { useEffect, useState } from 'react';

export const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        async function fetchNotifications() {
            let comments = await axios.get('https://restcountries.com/v2/all')
            setNotifications(comments.data);

        };
        fetchNotifications();
    }, []);

    
    return (
        <>
            <div class="dropdown-menu dropdown-menu-end" id="notification">
                <div id="DZ_W_Notification1" class="widget-media dz-scroll p-3" style={{ height: "380px" }}>
                    <ul class="timeline">
                        {notifications.map(note => (  
                            <li>
                                <div class="timeline-panel">
                                    <div class="media me-2">
                                        <img alt="image" width="50" src={note.flag} />
                                    </div>
                                    <div class="media-body">
                                        <h6 class="mb-1">{note.name}</h6>
                                        <small class="d-block">{note.area}</small>
                                    </div>
                                </div>
                            </li>   
                        ))}
                    </ul>
                </div>
                <a class="all-notification" href="javascript:void(0);">See all notifications <i class="ti-arrow-end"></i></a>
            </div>



            {/* <div class="dropdown-menu dropdown-menu-end" id="notification">
                <div id="DZ_W_Notification1" class="widget-media dz-scroll p-3" style={{ height: "380px" }}>
                    <ul class="timeline">
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2">
                                    <img alt="image" width="50" src={require('../images/1.jpg')} />
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Dr sultads Send you Photo</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2 media-info">
                                    KG
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Resport created successfully</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2 media-success">
                                    <i class="fa fa-home"></i>
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Reminder : Treatment Time!</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2">
                                    <img alt="image" width="50" src={require('../images/2.jpg')} />
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Dr sultads Send you Photo</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2 media-danger">
                                    KG
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Resport created successfully</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2 media-primary">
                                    <i class="fa fa-home"></i>
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Reminder : Treatment Time!</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2">
                                    <img alt="image" width="50" src={require('../images/4.jpg')} />
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Dr sultads Send you Photo</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2 media-info">
                                    KG
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Resport created successfully</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2 media-success">
                                    <i class="fa fa-home"></i>
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Reminder : Treatment Time!</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2">
                                    <img alt="image" width="50" src={require('../images/5.jpg')} />
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Dr sultads Send you Photo</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2 media-danger">
                                    KG
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Resport created successfully</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-panel">
                                <div class="media me-2 media-primary">
                                    <i class="fa fa-home"></i>
                                </div>
                                <div class="media-body">
                                    <h6 class="mb-1">Reminder : Treatment Time!</h6>
                                    <small class="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <a class="all-notification" href="javascript:void(0);">See all notifications <i class="ti-arrow-end"></i></a>
            </div> */}

        </>
    );
}