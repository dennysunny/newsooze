import React, { Component, Fragment } from "react";
import TechCrunch from "./TechCrunch";
import axios from "axios";

class TechCrunchArticles extends Component {
    state = {
        news: [],
        loading: true,
    };

    componentDidMount() {
        axios
            .get("https://gnews.io/api/v3/search?q=techcrunch&token=549ab5bf1867e07059b00a64060ed62d")
            .then((res) => {
                console.log(res.data.articles);
                this.setState({
                    news: res.data.articles,
                    loading: false,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        const { news } = this.state;
        return (
            <Fragment>
                <div className="row">
                    <h2 className="sub-heading top-lead">TechCrunch</h2>
                </div>
                <div className="card-columns">
                    {news && news.map((article, index) => {
                            return (
                                <TechCrunch
                                    key={index}
                                    title={article.title}
                                    Published At={article.publishedAt}
                                    link={article.url}
                                    img={article.image}
                                    desc={article.description}
                                    source={article.source.name}
                                />
                            );
                        })
                    }
                </div>
            </Fragment>
        );
    }
}

export default TechCrunchArticles;
