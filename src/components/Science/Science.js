import React, { Fragment } from "react";
import news from "../../img/news.png";

const Science = (props) => {
    const { title, link, img, desc, publishedAt, source } = props;
    return (
        <Fragment>
            <div className="card">
                <img
                    src={!img ? news : img}
                    className="card-img-top card-img"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title title">{title}</h5>
                    <p className="card-text desc">{desc}</p>
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn btn-success article-btn"
                    >
                        News Article
                    </a>
                    <p className="source">Source: {source}</p>
                    <p className="source">Published At: {publishedAt}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Science;
