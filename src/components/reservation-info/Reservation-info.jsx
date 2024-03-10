import "./reservation-info.css"



export default function ReservationInfo() {
    return <div className="reservationContainer">
        <div className="infoContainer">
            <div className="infoHeader">
                <p className="personName">Bill Gates</p>
                <svg className="infoIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="128" cy="128" r="96" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="124" cy="84" r="12" /></svg>
            </div>

            <time dateTime="04/04/2024"> 04/04/2024</time>


            <div className="reservationInfo">
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><rect x="64" y="32" width="128" height="40" rx="8" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="168" y1="72" x2="192" y2="224" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="64" y1="224" x2="88" y2="72" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="72.84" y1="168" x2="183.16" y2="168" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>Table 4</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="128" cy="128" r="96" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><polyline points="128 72 128 128 184 128" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>04:00PM</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="84" cy="108" r="52" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>Person 4</li>
                </ul>
            </div>
            <div className="reservationStatus">
                <svg className="alertIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="128" y1="144" x2="128" y2="104" fill="none" stroke="#2f372d" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="128" cy="180" r="12" fill="#2f372d" /></svg>
                <p>Status <br></br>
                    <span className="status">Pending</span>
                </p>
            </div>
        </div>
        <div className="buttons">
            <button className="reject">Reject</button>
            <button className="confirm">Confirm</button>
        </div>
    </div>
}