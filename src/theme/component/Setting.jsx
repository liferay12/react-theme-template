import axios from "axios";
import { useEffect, useState } from "react";

export const Setting = () => {

  const [randomColor, setRandomColor]=useState(["info", "primary", "danger", "success","warning"])
  const [setting, setSetting] = useState([]);
  useEffect(() => {
    async function fetchSetting() {
      let setting = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      setSetting(setting.data);

    };
    fetchSetting();
  }, []);

  return (
    <>

      <div class="dropdown-menu dropdown-menu-end" id="setting">
        <div
          id="DZ_W_TimeLine02"
          class="widget-timeline dz-scroll style-1 p-3 height370"
        >
          <ul class="timeline">
            {setting.map(set => (
              <>
                <li>
                  <div class={`timeline-badge ${randomColor[Math.floor((Math.random()*randomColor.length))]}`} ></div>{" "}
                  <a class="timeline-panel text-muted" href="javascript:void(0);">
                    {" "}
                    <span>10 minutes ago</span>
                    <h6 class="mb-0">
                      Youtube, a video-sharing website, goes live{" "}
                      <strong class="text-primary">$500</strong>.
                    </h6>
                  </a>
                </li>
              </>
            ))}
            {/* <li>
              <div class="timeline-badge primary"></div>{" "}
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                {" "}
                <span>10 minutes ago</span>
                <h6 class="mb-0">
                  Youtube, a video-sharing website, goes live{" "}
                  <strong class="text-primary">$500</strong>.
                </h6>
              </a>
            </li>
            <li>
              <div class="timeline-badge info"></div>{" "}
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                {" "}
                <span>20 minutes ago</span>
                <h6 class="mb-0">
                  New order placed <strong class="text-info">#XF-2356.</strong>
                </h6>
                <p class="mb-0">
                  Quisque a consequat ante Sit amet magna at volutapt...
                </p>
              </a>
            </li>
            <li>
              <div class="timeline-badge danger"></div>{" "}
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                {" "}
                <span>30 minutes ago</span>
                <h6 class="mb-0">
                  john just buy your product{" "}
                  <strong class="text-warning">Sell $250</strong>
                </h6>
              </a>
            </li>
            <li>
              <div class="timeline-badge success"></div>{" "}
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                {" "}
                <span>15 minutes ago</span>
                <h6 class="mb-0">StumbleUpon is acquired by eBay.</h6>
              </a>
            </li>
            <li>
              <div class="timeline-badge warning"></div>{" "}
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                {" "}
                <span>20 minutes ago</span>
                <h6 class="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </a>
            </li>
            <li>
              <div class="timeline-badge dark"></div>{" "}
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                {" "}
                <span>20 minutes ago</span>
                <h6 class="mb-0">
                  Mashable, a news website and blog, goes live.
                </h6>
              </a>
            </li> */}
          </ul>
        </div>
      </div>

    </>
  );
};
