import { EmailService } from "../Service/EmailService";


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
										<>
											{
												item.type === "icon" ? (
													<li className="nav-item dropdown notification_dropdown">
														<a className="nav-link " href="javascript:void(0);" data-bs-toggle="dropdown">
															{item.name}

														</a>
													</li>
												) : (
													<li className="nav-item align-items-center header-border"><a href="./page-login.html" className="btn btn-primary btn-sm">{item.name}</a></li>

												)
											}
										</>
									)
								}




								<li className="nav-item ps-3">
									<div className="dropdown header-profile2">
										<a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											<div className="header-info2 d-flex align-items-center">
												<div className="header-media">
													<img src="../images/1(1).jpg" alt="" />
												</div>
												<div className="header-info">
													<h6>{EmailService.name}</h6>
													<p>{EmailService.email}</p>
												</div>

											</div>
										</a>
										<div className="dropdown-menu dropdown-menu-end" >
											<div className="card border-0 mb-0">
												<div className="card-header py-2">
													<div className="products">
														<img src="../images/1(1).jpg" className="avatar avatar-md" alt="" />
														<div>
															<h6>Thomas Fleming</h6>
															<span>Web Designer</span>
														</div>
													</div>
												</div>

											</div>

										</div>
									</div>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
}