import { EmailService } from "../Service/EmailService";
import { Login } from "../../component/Login";
import pro from "../images/1.jpg"
import { Profile } from "../../component/Profile";
import { Setting } from "../../component/Setting";
import { Notification } from "../../component/Notification";

export const Topbar = (props) => {

	return (
		<>
			<div className="header">
				<div className="header-content">
					<nav className="navbar navbar-expand">
						<div className="collapse navbar-collapse justify-content-between">
							<div className="header-left">
								<div className="input-group search-area">
									<span className="input-group-text"><a href="javascript:void(0)">
										<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="8.78605" cy="8.78605" r="8.23951" stroke="white" stroke-linecap="round" stroke-linejoin="round"></circle>
											<path d="M14.5168 14.9447L17.7471 18.1667" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
										</svg>

									</a></span>
									<input type="text" className="form-control" placeholder="Search" />
								</div>
							</div>
							<ul className="navbar-nav header-right">
								{
									props.data.map((item) =>
										{
											if(item.type === "setting"){
												return(
												<li className="nav-item notification_dropdown" data-bs-toggle="dropdown" data-target="#setting">
													<a className="nav-link " href={item.path} >
														{item.name}
														<Setting></Setting>
													</a>
												</li>
												)
											}
											else if(item.type === "notification"){
												return(
												<li className="nav-item  notification_dropdown" >
													<a className="nav-link " href={item.path} data-bs-toggle="dropdown" data-target="#notification">
														{item.name}
														<Notification></Notification>
													</a>
												</li>)
											}
											else if(item.type === "message"){
												return(
												<li className="nav-item dropdown message_dropdown" >
													<a className="nav-link " href={item.path} >
														{item.name}
														
													</a>
												</li>)
											}
											else if(item.type === "button"){
												return(
													<li className="nav-item align-items-center header-border">
														<a href={item.path} className="btn btn-primary btn-sm">
															{item.name}
														</a>
													</li>

												)
											}
										}
									)
								}

								{/* For setting icon in heder Start*/}
								
								{/* For setting icon in heder End */}

								{/* For Notification Icon in header strat */}

								


								{/* For Notification Icon in header end */}

								{/* For Profile In header start */}

								<Profile></Profile>

								{/* For Profile In header end */}

								
							</ul>

						</div >

					</nav >
				</div >
			</div >
		</>
	);
}