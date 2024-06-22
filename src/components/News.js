import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [

        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "2024 NFL Mock Draft: Brinson's Worst Mock Ever designed to anger every single NFL fan base - CBS Sports",
            "description": "Will Brinson trolls his boat once again",
            "url": "https://www.cbssports.com/nfl/draft/news/2024-nfl-mock-draft-brinsons-worst-mock-ever-designed-to-anger-every-single-nfl-fan-base/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/04/17/0e98acb0-a94b-49bd-94a4-e3053b13e4ad/thumbnail/1200x675/9a41c3a0c320997eed683d1378f0fb78/mccarthy.jpg",
            "publishedAt": "2024-04-24T06:43:00Z",
            "content": "Last year I finally did something I'd been meaning to do for years, putting together the WORST MOCK DRAFT EVER. The purpose? To troll every single NFL fan base (or at least as many as possible) with … [+1565 chars]"
        },

        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Brittany Shepherd",
            "title": "George Santos ends long shot comeback bid for Congress after being expelled - ABC News",
            "description": "\"It’s only goodbye for now,\" the disgraced former representative said.",
            "url": "https://abcnews.go.com/Politics/george-santos-ends-long-shot-comeback-bid-congress/story?id=109547245",
            "urlToImage": "https://i.abcnewsfe.com/a/9a67674a-f6d5-4fd5-8930-07b8f8f7cf80/santos-gty-er-240423_1713908055210_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-04-24T02:42:16Z",
            "content": "Disgraced former Rep. George Santos has suspended a long shot comeback bid to represent New York's 1st Congressional District, he said on Tuesday, insisting that his challenge to incumbent Republican… [+1833 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Nick Robertson",
            "title": "UN calls for investigation into mass graves found at Gaza hospitals - The Hill",
            "description": "United Nations leaders demanded a “clear, transparent and credible” investigation Tuesday after mass graves containing the bodies of hundreds of men and women were discovered on the grounds of two major hospitals in Gaza that were previously under assault by …",
            "url": "https://thehill.com/policy/international/4616720-un-calls-for-investigation-into-mass-graves-found-at-gaza-hospitals/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/04/GettyImages-2148009059-2.jpg?w=1280",
            "publishedAt": "2024-04-24T01:12:00Z",
            "content": "Skip to content\r\nUnited Nations leaders demanded a “clear, transparent and credible” investigation Tuesday after mass graves containing the bodies of hundreds of men and women were discovered on the … [+2674 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Winston Cho",
            "title": "A Ban on Noncompetes Could Raise Pay — And Complicate Contracts — In Hollywood - Hollywood Reporter",
            "description": "The FTC on Tuesday voted to prohibit noncompete provisions in contracts, which could usher in a sea change to worker mobility and how companies structure contracts to protect proprietary information.",
            "url": "http://www.hollywoodreporter.com/business/business-news/ban-noncompetes-could-raise-pay-complicate-contracts-hollywood-1235879986/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/04/Lina-Khan-Dealbook-Summit-GettyImages-1820955015-H-2024.jpg?w=1024",
            "publishedAt": "2024-04-24T00:45:00Z",
            "content": "Employers have been banned from adopting or enforcing clauses restricting workers’ ability to move to competitors, marking a pivotal change to the employment landscape that could improve working cond… [+8105 chars]"
        },

        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "After 5 months of problems, NASA's aging Voyager 1 is working again - CNN 10",
            "description": "Today on CNN 10, the Voyager 1 spacecraft has finally sent decipherable code back to Earth again, after NASA engineers fixed a communication problem. Voyager...",
            "url": "https://www.youtube.com/watch?v=3AH7YGZ31ZE",
            "urlToImage": "https://i.ytimg.com/vi/3AH7YGZ31ZE/maxresdefault.jpg",
            "publishedAt": "2024-04-23T23:30:00Z",
            "content": null
        },

        {
            "source": {
                "id": null,
                "name": "9to5google.com"
            },
            "author": "Ben Schoon",
            "title": "Meta's Ray-Ban glasses now have AI, video calls, more - 9to5Google",
            "description": "Meta has today announced that its smart glasses built with Ray-Ban will be getting AI features, video call support, and new styles.",
            "url": "http://9to5google.com/2024/04/23/meta-ray-ban-glasses-ai-video-call-style/",
            "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/04/meta-ray-ban-skyler-4.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-04-23T19:51:00Z",
            "content": "The dream of smart glasses has never died, but it’s also never truly succeeded. With its Ray-Ban smart glasses, though, Meta seems to have cracked the code, and it’s now bringing new AI features, vid… [+1891 chars]"
        },


    ];
    constructor() {
        super();
        console.log("i am a constructor from news component")
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }
    render() {
        return (
            <div className="container my-3" >
                <h2>NewsMonkey Top headline</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 45)} 
                            description={element.description.slice(0, 90)} 
                            imageUrl={element.urlToImage} 
                            newsUrl={element.url} 
                            alt={element.name} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News
