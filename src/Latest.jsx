import React from "react";
import { data } from "./Data";


const Latest = () => {
    return (
       
        <div className="container">
             
            <h1 className="bg-danger text-white p-2 news fs-2">Latest News</h1>
            {/* Map through the data array */}
            <div className="con">

                <ul className="d-flex gap-3">
                    {data.slice(0, 3).map((news, index) => (
                        <li key={index} >


                            {news.url && (
                                <img className="img2"
                                    src={news.url}
                                    alt="News"
                                    style={{ width: "300px", height: "200px", objectFit: "cover" }}
                                />
                            )}

                            <h3 className="heading">{news.title}</h3>

                        </li>

                    ))}
                </ul>
            </div>
            <div className="con">

                <ul className="d-flex gap-3">
                    {data.slice(3, 6).map((news, index) => (
                        <li key={index} >
{/* <h2 className=" heading btn btn-danger text-white">Health</h2> */}

                            {news.url && (
                                <img className="img2"
                            
                                    src={news.url}
                                    alt="News"
                                    style={{ width: "300px", height: "200px", objectFit: "cover" }}
                                />
                            )}

                            <h3 className="heading">{news.title}</h3>

                        </li>

                    ))}
                </ul>
            </div>
            <div className="con">

                <ul className="d-flex gap-3">
                    {data.slice(6, 9).map((news, index) => (
                        <li key={index} >


                            {news.url && (
                                <img className="img2"
                                    src={news.url}
                                    alt="News"
                                    style={{ width: "300px", height: "200px", objectFit: "cover" }}
                                />
                            )}

                            <h3 className="heading">{news.title}</h3>

                        </li>

                    ))}
                </ul>
            </div>
            <div className="con">

                <ul className="d-flex gap-3">
                    {data.slice(9, 12).map((news, index) => (
                        <li key={index} >


                            {news.url && (
                                <img className="img2"
                                    src={news.url}
                                    alt="News"
                                    style={{ width: "300px", height: "200px", objectFit: "cover" }}
                                />
                            )}

                            <h3 className="heading">{news.title}</h3>

                        </li>

                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Latest;
