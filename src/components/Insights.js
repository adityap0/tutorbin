import React, { Component } from "react";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DevicesIcon from "@mui/icons-material/Devices";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TimerIcon from "@mui/icons-material/Timer";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import GoogleIcon from "@mui/icons-material/Google";
import "./insights.css";
class Insights extends Component {
  componentDidMount() {
    console.log(
      this.props.data.lighthouseResult.audits["final-screenshot"].details.data
    );
  }
  calculateFCP = () => {
    const fcp = [];
    const fcpArr =
      this.props.data.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS
        .distributions;
    for (let i = 0; i < 3; i++) {
      fcp[i] = Math.round(fcpArr[i].proportion * 100);
    }
    return fcp;
  };
  calculateFID = () => {
    const fid = [];
    const fidArr =
      this.props.data.loadingExperience.metrics.FIRST_INPUT_DELAY_MS
        .distributions;
    for (let i = 0; i < 3; i++) {
      fid[i] = Math.round(fidArr[i].proportion * 100);
    }
    return fid;
  };
  calculateLCP = () => {
    const lcp = [];
    const lcpArr =
      this.props.data.loadingExperience.metrics.LARGEST_CONTENTFUL_PAINT_MS
        .distributions;
    for (let i = 0; i < 3; i++) {
      lcp[i] = Math.round(lcpArr[i].proportion * 100);
    }
    return lcp;
  };
  calculateCLS = () => {
    const cls = [];
    const clsArr =
      this.props.data.loadingExperience.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE
        .distributions;
    for (let i = 0; i < 3; i++) {
      cls[i] = Math.round(clsArr[i].proportion * 100);
    }
    return cls;
  };

  render() {
    const lighthouseResult = this.props.data.lighthouseResult.audits;
    return (
      <>
        <div className="border w-9/12 mx-auto">
          <div className="m-4 flex">
            <img
              src="https://www.gstatic.com/pagespeed/insights/ui/img/icon-field.svg"
              alt=""
            />
            <div className="flex flex-col mx-4">
              <h1 className="text-left">
                Discover what your real users are experiencing
              </h1>
              <p className="text-xs text-gray-500">
                Learn how your site has performed, based on data from your
                actual users around the world.
              </p>
            </div>
          </div>
          <div className="m-4 my-14 flex justify-between align-middle mx-auto w-6/12">
            <img
              src="https://www.gstatic.com/pagespeed/insights/ui/img/cwv_pass.svg"
              alt="passed"
            />
            <div className="flex flex-col justify-center w-9/12">
              <h1 className="text-left">
                Core Web Vitals Assessment:{" "}
                <span className="text-green-400">Passed</span>{" "}
              </h1>
              <p className="text-xs text-gray-500 w-9/12">
                Computed from the Core Web Vitals metrics over the latest 28-day
                collection period.
              </p>
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap">
              <li className="w-6/12">
                <div className="flex flex-col align-middle justify-center">
                  <div className="flex">
                    <ChangeHistoryIcon
                      style={{ height: "20px", margin: "0 12px" }}
                    />
                    <h1>First Contentful Paint (FCP)</h1>
                  </div>
                  <div class="h-2 flex border w-10/12 mx-auto my-6">
                    {this.calculateFCP().map((item, i) => {
                      const color = [
                        "bg-green-500",
                        "bg-yellow-500",
                        "bg-red-500",
                      ];
                      return (
                        <div
                          className={color[i]}
                          style={{
                            width: `${item}%`,
                          }}
                          key={item + i}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </li>
              <li className="w-6/12">
                <div className="flex flex-col align-middle justify-center">
                  <div className="flex">
                    <ChangeHistoryIcon
                      style={{ height: "20px", margin: "0 12px" }}
                    />
                    <h1>First Input Delay (FID)</h1>
                  </div>
                  <div class="h-2 flex border w-10/12 mx-auto my-6">
                    {this.calculateFID().map((item, i) => {
                      const color = [
                        "bg-green-500",
                        "bg-yellow-500",
                        "bg-red-500",
                      ];
                      return (
                        <div
                          className={color[i]}
                          style={{
                            width: `${item}%`,
                          }}
                          key={item + i}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </li>
              <li className="w-6/12">
                <div className="flex flex-col align-middle justify-center">
                  <div className="flex">
                    <ChangeHistoryIcon
                      style={{ height: "20px", margin: "0 12px" }}
                    />
                    <h1>Largest Contentful Paint (LCP)</h1>
                  </div>
                  <div class="h-2 flex border w-10/12 mx-auto my-6">
                    {this.calculateLCP().map((item, i) => {
                      const color = [
                        "bg-green-500",
                        "bg-yellow-500",
                        "bg-red-500",
                      ];
                      return (
                        <div
                          className={color[i]}
                          style={{
                            width: `${item}%`,
                          }}
                          key={item + i}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </li>
              <li className="w-6/12">
                <div className="flex flex-col align-middle justify-center">
                  <div className="flex">
                    <ChangeHistoryIcon
                      style={{ height: "20px", margin: "0 12px" }}
                    />
                    <h1>Cumulative Layout Shift (CLS)</h1>
                  </div>
                  <div class="h-2 flex border w-10/12 mx-auto my-6">
                    {this.calculateCLS().map((item, i) => {
                      const color = [
                        "bg-green-500",
                        "bg-yellow-500",
                        "bg-red-500",
                      ];
                      return (
                        <div
                          className={color[i]}
                          style={{
                            width: `${item}%`,
                          }}
                          key={item + i}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </li>
            </ul>
            <div className="bg-gray-200 m-4">
              <ul className="flex flex-wrap align-middle justify-between">
                <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                  <h1>
                    <DateRangeIcon /> Latest 28-day collection period
                  </h1>
                </li>
                <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                  <h1>
                    <DevicesIcon />
                    Various Mobile Devices
                  </h1>
                </li>
                <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                  <h1>
                    <MoreHorizIcon /> Many Samples
                  </h1>
                </li>
                <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                  <h1>
                    <TimerIcon /> Full visit durations
                  </h1>
                </li>
                <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                  <h1>
                    <NetworkWifiIcon /> Various network connections
                  </h1>
                </li>
                <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                  <h1>
                    <GoogleIcon /> All chrome versions
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border w-9/12 mx-auto my-4">
          <div className="m-4 flex">
            <img
              src="https://www.gstatic.com/pagespeed/insights/ui/img/icon-lab.svg"
              alt=""
            />
            <div className="flex flex-col mx-4">
              <h1 className="text-left">Diagnose performance issues</h1>
              <p className="text-xs text-gray-500">
                See detailed analysis and recommendations from loading your site
                in a simulated environment.
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-6/12 flex flex-col align-middle justify-center border-r">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ "--value": 89 }}
                className="mx-auto my-4"
              ></div>
              <h1>Performance</h1>
              <p className="text-center text-xs w-8/12 mx-auto my-2">
                Values are estimated and may vary. The performance score is
                calculated directly from these metrics. See calculator.
              </p>
            </div>
            <div className="w-6/12">
              <div className="w-10/12 mx-auto h-auto">
                <img
                  src={
                    this.props.data.lighthouseResult.audits["final-screenshot"]
                      .details.data
                  }
                  alt="ss"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="my-6">
            <h1 className="text-left m-4 text-xs text-gray-600">METRICS</h1>
            <ul className="flex flex-wrap justify-between">
              <li className="w-5/12 border-t my-4">
                <div className="flex">
                  <div className="w-4 h-4 rounded-full bg-green-500 mx-4 mt-1"></div>
                  <span>First Contentful Paint</span>
                </div>
                <span className="text-green-500 text-3xl ml-12">
                  {
                    this.props.data.lighthouseResult.audits[
                      "first-contentful-paint"
                    ].displayValue
                  }
                </span>
              </li>
              <li className="w-5/12 border-t my-4">
                <div className="flex">
                  <div className="w-4 h-4 rounded-full bg-green-500 mx-4 mt-1"></div>
                  <span>Time to Interactive</span>
                </div>
                <span className="text-green-500 text-3xl ml-12">
                  {
                    this.props.data.lighthouseResult.audits.metrics.details
                      .items[0].interactive / 100 + " ms"
                  }
                </span>
              </li>
              <li className="w-5/12 border-t my-4">
                <div className="flex">
                  <div className="w-4 h-4 rounded-full bg-green-500 mx-4 mt-1"></div>
                  <span>Speed Index</span>
                </div>
                <span className="text-green-500 text-3xl ml-12">
                  {
                    this.props.data.lighthouseResult.audits["speed-index"]
                      .displayValue
                  }
                </span>
              </li>
              <li className="w-5/12 border-t my-4">
                <div className="flex">
                  <div className="w-4 h-4 rounded-full bg-green-500 mx-4 mt-1"></div>
                  <span>Total Blocking Time</span>
                </div>
                <span className="text-green-500 text-3xl ml-12">
                  {
                    this.props.data.lighthouseResult.audits[
                      "total-blocking-time"
                    ].displayValue
                  }
                </span>
              </li>
              <li className="w-5/12 border-t my-4">
                <div className="flex">
                  <div className="w-4 h-4 rounded-full bg-green-500 mx-4 mt-1"></div>
                  <span>Largest Contentful Paint</span>
                </div>
                <span className="text-green-500 text-3xl ml-12">
                  {
                    this.props.data.lighthouseResult.audits[
                      "largest-contentful-paint"
                    ].displayValue
                  }
                </span>
              </li>
              <li className="w-5/12 border-t my-4">
                <div className="flex">
                  <div className="w-4 h-4 rounded-full bg-green-500 mx-4 mt-1"></div>
                  <span>Cumulative Layout Shift</span>
                </div>
                <span className="text-green-500 text-3xl ml-12">
                  {
                    this.props.data.lighthouseResult.audits[
                      "cumulative-layout-shift"
                    ].displayValue
                  }
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-200 m-4">
            <ul className="flex flex-wrap align-middle justify-between">
              <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                <h1>
                  <DateRangeIcon /> Latest 28-day collection period
                </h1>
              </li>
              <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                <h1>
                  <DevicesIcon />
                  Various Mobile Devices
                </h1>
              </li>
              <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                <h1>
                  <MoreHorizIcon /> Many Samples
                </h1>
              </li>
              <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                <h1>
                  <TimerIcon /> Full visit durations
                </h1>
              </li>
              <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                <h1>
                  <NetworkWifiIcon /> Various network connections
                </h1>
              </li>
              <li className="w-4/12 text-xs my-1 hover:bg-gray-300 cursor-pointer flex justify-items-start">
                <h1>
                  <GoogleIcon /> All chrome versions
                </h1>
              </li>
            </ul>
          </div>
        </div>
        ;
      </>
    );
  }
}

export default Insights;
