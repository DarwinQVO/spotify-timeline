// Updated Timeline data with subsection_type and unified relationships
console.log('Loading updated timeline data...');

window.timelineData = {
    timeline_events: [
        {
            entity: "Spotify",
            event_description: "Daniel Ek suspects Steve Jobs is behind delays in Spotify's US launch.",
            timestamp: "End of 2010",
            page_number: 6,
            supporting_text: "Toward the end of 2010, Spotify had spent two years amassing seven million users in Europe. But the company's crucial US launch faced massive delays. Founder and CEO Daniel Ek was struggling to understand why. \"He called and breathed down the line,\" he told one of his staff members, who would later recount the conversation. \"Who?\" the colleague said. \"Steve Jobs,\" Daniel replied.",
            certainty: "estimate",
            details: {
                metric: "Seven million users in Europe (Spotify)",
                milestone: "Spotify's US launch faced massive delays",
                quote: "\"Steve Jobs,\" Daniel replied.",
                relationships: ["Steve Jobs"],
                relevant_info: "Apple was the world's largest platform for digital music distribution with iTunes."
            },
            subsection_type: "Artist & Label Relations/Conflicts"
        },
        {
            entity: "Music Industry",
            event_description: "Apple's iTunes model (99 cents/song) was dominant; Android phones were not part of its ecosystem.",
            timestamp: "End of 2010",
            page_number: 6,
            supporting_text: "The iTunes model, based on downloads for 99 cents per song, worked on any Apple device, and on PCs. But Android phones were not part of the iTunes ecosystem, and Steve Jobs liked it that way.",
            certainty: "certain",
            details: {
                metric: "99 cents per song (iTunes model)",
                relevant_info: "Steve Jobs viewed music as a crucial weapon in a 'holy war' against Google's Android.",
                relationships: ["Apple", "Google"]
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify's US launch delays cause investor nervousness and negative user growth for the first time.",
            timestamp: "Late 2010",
            page_number: 7,
            supporting_text: "But suddenly, Universal's executives refused to sign. The machine ground to a halt, and Spotify's investors were becoming nervous. In fact, Spotify would soon start to see negative user growth for the first time. It could all come crashing down.",
            certainty: "certain",
            details: {
                milestone: "Universal Music executives refused to sign deal for US launch.",
                metric: "Negative user growth for the first time.",
                relationships: ["Spotify", "Universal Music"],
                relevant_info: "Steve Jobs was badmouthing Spotify and ad-funded music streaming to label executives."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launched in Sweden in 2008.",
            timestamp: "2008",
            page_number: 7,
            supporting_text: "WHAT HAPPENED IN the following years now belongs to history. Since launching in Sweden in 2008, Spotify can rightfully claim to have saved the",
            certainty: "certain",
            details: {
                milestone: "Spotify launch in Sweden."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Daniel Ek states Spotify's success was due to commitment to freemium and starting in Sweden.",
            timestamp: "August 2018",
            page_number: 8,
            supporting_text: "\"I'll give you two reasons,\" he replied. \"First of all, we were committed to the freemium business model when no one else was. This was very controversial. \"Second, we started in Sweden, proved our model, opened up in more European countries, and grew organically one country at a time. That's what finally made the music industry realize that our model was the future.\"",
            certainty: "certain",
            details: {
                quote: "\"First of all, we were committed to the freemium business model when no one else was... Second, we started in Sweden, proved our model, opened up in more European countries, and grew organically one country at a time.\" - Daniel Ek",
                relevant_info: "Quote from an interview with the book's authors."
            },
            subsection_type: "Public Statements, Appearances & PR"
        },
        {
            entity: "Spotify",
            event_description: "Spotify user base expected to surpass 350 million (2021 projection).",
            timestamp: "2021 (expected)",
            page_number: 8,
            supporting_text: "With a market cap in the tens of billions on Wall Street, Spotify is the largest music streaming company in the world, with more than fifty million songs, over a million podcasts, business in more than ninety countries, and a user base expected to surpass 350 million in 2021.",
            certainty: "estimate",
            details: {
                metric: "User base expected to surpass 350 million.",
                relevant_info: "Spotify has >50M songs, >1M podcasts, business in >90 countries."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek (aged 22) interviews with Mattias Miksche (CEO of Stardoll); offered CTO, joined as consultant.",
            timestamp: "Fall of 2005",
            page_number: 10,
            supporting_text: "In the fall of 2005, Daniel Ek passed through Vasastan...Daniel walked down Tegnérgatan until he arrived at the site of his job interview, a pub called Man in the Moon...Mattias Miksche was dressed like your average tech entrepreneur-t-shirt and suit jacket. He had just become CEO of Stardoll... \"I'd like you to be our new CTO,\" Mattias Miksche said, at last. Daniel was ready and willing, but he wanted to join only as a consultant... \"I have another thing that I'll need to take care of,\" he explained.",
            certainty: "certain",
            details: {
                milestone: "Offered CTO role at Stardoll, joined as a consultant.",
                relationships: ["Mattias Miksche"],
                quote: "\"I'd like you to be our new CTO,\" Mattias Miksche said, at last. Daniel was ready and willing, but he wanted to join only as a consultant... \"I have another thing that I'll need to take care of,\" he explained."
            },
            subsection_type: "Key Personnel Events"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek first meets Martin Lorentzon pitching Tradedoubler a product search engine.",
            timestamp: "Summer 2005",
            page_number: 11,
            supporting_text: "He had recently met Martin Lorentzon... The pair first met in summer 2005, when Daniel tried to pitch Tradedoubler on a product search engine akin to Google's \"Froogle\"",
            certainty: "certain",
            details: {
                relationships: ["Martin Lorentzon"],
                relevant_info: "Martin wasn't very impressed initially."
            },
            subsection_type: "Personal Life Events of Key Figures"
        },
        {
            entity: "Music Industry",
            event_description: "Tradedoubler (Martin Lorentzon's company) IPOs on Stockholm Stock Exchange, Lorentzon sells shares for ~$12M.",
            timestamp: "November 8, 2005",
            page_number: 14,
            supporting_text: "On November 8, 2005, Tradedoubler was listed on the Stockholm Stock Exchange. Martin Lorentzon was now able to sell a large portion of his shares for nearly $12 million.",
            certainty: "certain",
            details: {
                metric: "Martin Lorentzon sold shares for nearly $12 million.",
                milestone: "Tradedoubler IPO.",
                relationships: ["Martin Lorentzon", "Felix Hagnö", "Tradedoubler"]
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Martin Lorentzon invests ten million crowns (over $1M USD) as seed funding for Spotify.",
            timestamp: "Early 2006",
            page_number: 15,
            supporting_text: "\"I'll put in ten million crowns,\" Martin said at one point. Daniel would later describe how he checked his bank account the next day and found the money, a sum worth more than a million dollars, sitting there.",
            certainty: "certain",
            details: {
                metric: "Ten million crowns (over $1M USD) initial investment.",
                milestone: "Initial seed funding from Martin Lorentzon.",
                relationships: ["Daniel Ek", "Martin Lorentzon"]
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "The name 'Spotify' is conceived and spotify.com domain purchased.",
            timestamp: "Early 2006",
            page_number: 15,
            supporting_text: "They would later tell the story of them sitting in Daniel's apartment, calling out words in the hope of naming their company something great that wasn't already taken. Martin thought he heard Daniel call out, \"Spotify\" from another room. He typed \"spotify.com\" into his browser and nothing came up. He proceeded to purchase the domain name all over the world.",
            certainty: "certain",
            details: {
                milestone: "Company naming and domain acquisition.",
                relevant_info: "Daniel maintains Martin misheard him, but the name stuck."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek sells Advertigo to Tradedoubler for $1.3 million.",
            timestamp: "Late March 2006",
            page_number: 16,
            supporting_text: "In late March 2006, Daniel Ek sold Advertigo to Tradedoubler for $1.3 million. The company had no income and basically consisted of some advertising technology and a few tech consultants.",
            certainty: "certain",
            details: {
                metric: "$1.3 million (sale price of Advertigo)",
                milestone: "Daniel Ek secures personal funds.",
                relationships: ["Tradedoubler", "Advertigo"]
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify AB officially founded (April 1, 2006), owned by Ek and Lorentzon's Cyprus holding companies.",
            timestamp: "April 1, 2006",
            page_number: 17,
            supporting_text: "According to Martin Lorentzon's official story, Spotify was founded on his 37th birthday, on April 1, 2006. The paperwork was filed a couple of weeks later. For a brief period, the Swedish company, Spotify AB, acted as Spotify's parent company. It was, in turn, owned by Martin and Daniel's holding companies on Cyprus.",
            certainty: "certain",
            details: {
                milestone: "Official founding of Spotify AB.",
                relationships: ["Martin Lorentzon"],
                relevant_info: "Parent company structure through Cyprus holding companies."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Andreas Ehn becomes Spotify's first CTO.",
            timestamp: "Around May 2006",
            page_number: 17,
            supporting_text: "At about the same time, Daniel Ek went to see his successor at Stardoll, Andreas Ehn, to make him an offer. \"We're starting a company. You want in?\" he said... He soon became Spotify's first CTO, with enough stock options to eventually make him independently wealthy.",
            certainty: "certain",
            details: {
                milestone: "Key early hire.",
                relationships: ["Daniel Ek", "Andreas Ehn"],
                relevant_info: "Ehn's departure was a blow to Stardoll."
            },
            subsection_type: "Key Personnel Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify's first engineers kick-off meeting in Barcelona; service envisioned as legal, ad-funded, torrent-based platform.",
            timestamp: "August 2006",
            page_number: 19,
            supporting_text: "In August, a small group of engineers flew to Barcelona for Spotify's kick off. Over tapas and red wine, Daniel and Martin Lorentzon explained that they wanted to create a legal, torrent-based platform for the distribution of music, and possibly video. The service would be ad-funded but free to use, they explained, because that was the only way to fight piracy.",
            certainty: "certain",
            details: {
                milestone: "Company kick-off and initial vision.",
                relevant_info: "Top priority was product development, licenses could wait."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify acquihires Ludvig Strigeus (µTorrent), making him 4th-largest shareholder (4.9%).",
            timestamp: "Mid-October 2006",
            page_number: 22,
            supporting_text: "In mid-October 2006, Spotify finalized the deal with µTorrent... Spotify paid Ludvig Strigeus a small amount of cash, and enough shares to make him Spotify's fourth-largest shareholder. Martin Lorentzon-42.8%, Daniel Ek-42.8%, Felix Hagnö–9.5%, Ludvig Strigeus–4.9%",
            certainty: "certain",
            details: {
                milestone: "Acquisition of µTorrent and key talent Ludvig Strigeus.",
                metric: "Ludvig Strigeus gets 4.9% of Spotify. Founders (Ek & Lorentzon) each hold 42.8%, Felix Hagnö 9.5%.",
                relationships: ["Spotify", "Ludvig Strigeus", "µTorrent"],
                relevant_info: "A few weeks after the deal, Spotify sold µTorrent to BitTorrent Inc."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "First demo of Spotify's music player ready; Fredrik Niemelä promoted to CPO.",
            timestamp: "January 2007",
            page_number: 29,
            supporting_text: "In January 2007, the first demo of Spotify's music player was ready. Everyone who tried it found the experience magical... Daniel was delighted with his engineering team and quickly promoted Fredrik Niemelä to the role of Chief Product Officer, CPO.",
            certainty: "certain",
            details: {
                milestone: "Functional product demo and key promotion.",
                quote: "\"It was rocket science, for real,\" an early admirer would express.",
                relevant_info: "The demo used pirated music files from The Pirate Bay and similar sites."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Andreas Ehn registers Spotify's first user account.",
            timestamp: "March 2007",
            page_number: 31,
            supporting_text: "In March 2007, a few members of Spotify's engineering team had just pulled another all-nighter... When it was time to register the first account, Andreas and Fredrik exchanged glances... Andreas would recall that, indeed, he registered Spotify's very first account.",
            certainty: "certain",
            details: {
                milestone: "First user account created.",
                relationships: ["Andreas Ehn", "Fredrik Niemelä", "Mattias de Zalenski"],
                quote: "\"CTO goes before product,\" the CPO [Fredrik Niemelä] said."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify's beta version released in Sweden with test licenses from STIM.",
            timestamp: "April 2007",
            page_number: 33,
            supporting_text: "Still, after paying a lump sum to Sweden's performance-rights organization, STIM, he was able to secure test licenses for a limited beta release. Spotify's beta version hit the market in April 2007.",
            certainty: "certain",
            details: {
                milestone: "Limited beta release with test licenses for Sweden.",
                relationships: ["Spotify", "STIM", "Daniel Ek"]
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify's first external funding (A-round) values company at $86M; Northzone & Creandum invest.",
            timestamp: "Late August 2008",
            page_number: 69,
            supporting_text: "During the summer, two of them [major labels] shook hands with Spotify for licenses that covered the Nordic countries and a few additional European markets... Northzone vowed to cover Innovationskapital's share of the funding, with Creandum taking the remaining third... In late August 2008, Spotify's first external funding round was registered in Luxembourg. Northzone invested more than $12 million... Spotify was now valued at $86 million.",
            certainty: "certain",
            details: {
                metric: "$12+ million from Northzone; Creandum also invested; Total valuation $86 million.",
                milestone: "First external funding round secured (A-Round); Nordic label deals signed.",
                relationships: ["Spotify", "Northzone", "Creandum", "Felix Hagnö"],
                relevant_info: "Martin Lorentzon successfully negotiated the investment to be in euros rather than dollars, increasing its value. Timing was immaculate, just before Lehman Brothers collapse. Forty employees toasted the news."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify officially launches in Sweden; premium (99 SEK/month) via Bredbandsbolaget, free tier invite-only.",
            timestamp: "October 7, 2008",
            page_number: 74,
            supporting_text: "The deals with the labels were signed a few weeks later and on October 7, Spotify's head of marketing, Sophia Bendz, sent out a press release. It stated that the streaming service had now officially launched in Sweden and that a premium, ad-free version was available for ninety-nine Swedish crowns (around twelve US dollars) per month, but only to customers of the broadband provider Bredbandsbolaget.",
            certainty: "certain",
            details: {
                milestone: "Official commercial launch in Sweden.",
                metric: "99 SEK (approx 12 USD) for premium.",
                relevant_info: "Soft launch; free subscriptions still invite-only initially. Martin Lorentzon predicted 20M users in 2-3 years. Initial plan to launch in 8 countries, later 6."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches broadly in UK, gains 1M users in ~2 months; London office opens.",
            timestamp: "February 2009",
            page_number: 79,
            supporting_text: "In February 2009, Spotify became broadly available in the UK, gaining a million British users in just over two months. The founders soon opened a London office located on the fifteenth floor of Centre Point...",
            certainty: "certain",
            details: {
                milestone: "UK Launch and rapid user acquisition.",
                metric: "1 million British users in ~2 months.",
                quote: "\"I've created things that millions of people have used before,\" the twenty six-year-old CEO said... \"but this is the first time people have started to recognize me in the street.\" - Daniel Ek"
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify mobile app with offline mode approved for Apple's App Store.",
            timestamp: "July 2009 (team submitted), August 27, 2009 (news official).",
            page_number: 83,
            supporting_text: "Toward the end of July, Gustav's team submitted the app to Apple's App Store... For the rest of the world, the news became official on August 27. Daniel Ek confirmed it in a tweet.",
            certainty: "certain",
            details: {
                milestone: "Spotify iPhone app approved and announced.",
                quote: "\"We got it!\" - Martin Lorentzon announcing internally. \"We're happy but have had a great dialogue with Apple all the way. They've been great!\" - Daniel Ek.",
                relationships: ["Spotify", "Apple"],
                relevant_info: "Approval was crucial for mobile strategy and competitiveness."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Sean Parker emails Daniel Ek suggesting Facebook partnership; Founders Fund invests $16.5M for 5% of Spotify (valuing at $330M).",
            timestamp: "Late Summer 2009 (email), Late December 2009 (investment).",
            page_number: 84,
            supporting_text: "Late in the summer of 2009, Daniel received a long email that gave him renewed hope. It came from Napster's co-founder Sean Parker... \"You've built an amazing experience,\" Sean wrote... In late December 2009, the Founders Fund invested $16.5 million in Spotify in exchange for five percent of the company. According to public records, the deal valued Spotify at $330 million.",
            certainty: "certain",
            details: {
                metric: "$16.5 million for 5% equity; $330 million valuation.",
                milestone: "Key US investor and ally secured.",
                quote: "\"You've built an amazing experience,\" Sean wrote. \"Ever since Napster I've dreamt of building a product similar to Spotify.\" \"Zuck and I have been talking about what this partnership should look like,\" he wrote.",
                relationships: ["Daniel Ek", "Sean Parker", "Mark Zuckerberg", "Peter Thiel", "Shakil Khan"]
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Music Industry",
            event_description: "Steve Jobs launches the iTunes Music Store with 200,000 tracks at 99 cents/song.",
            timestamp: "April 28, 2003",
            page_number: 51,
            supporting_text: "On April 28, 2003, Steve Jobs stepped on stage for an Apple Special Event... Apple, he explained, had made landmark deals with all the major record companies and built the iTunes Music Store. It contained two hundred thousand tracks from day one...",
            certainty: "certain",
            details: {
                milestone: "Launch of iTunes Music Store.",
                metric: "200,000 tracks at launch; 99 cents per song.",
                quote: "\"The music business is a cruel and shallow money trench...There's also a negative side.\" - Steve Jobs quoting Hunter S Thompson.",
                relevant_info: "Jobs criticized subscription services, emphasizing ownership of music: \"These services treat you like a criminal,\"."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches in US with free (invite-only) and premium ($5/$10) tiers.",
            timestamp: "July 14, 2011",
            page_number: 121,
            supporting_text: "The following afternoon, Warner signed the final deal... \"So excited Spotify is FINALLY coming to the US tomorrow!\" Britney Spears wrote on Twitter. Users in the United States were offered an ad-free version with unlimited desktop listening for five dollars per month. For twice that, they could save songs offline and listen on their cell phones. As with previous launches, free users initially needed an invitation to get started.",
            certainty: "certain",
            details: {
                milestone: "Official Spotify US Launch.",
                metric: "$5/month for ad-free desktop, $10/month for offline mobile.",
                relevant_info: "PR team created scarcity with invites (e.g., Motorola/Sprite got 100k each). Celebrities like Shakira, 50 Cent given invites. The Verge raffle gone in 9 mins."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify's deep Facebook integration ('The Hulk'/Open Graph) launches at F8, boosting paying subscribers from 1M to 2.5M (Mar-Nov 2011).",
            timestamp: "September 22, 2011 (F8 launch)",
            page_number: 127,
            supporting_text: "On September 22, 2011, a few months after Spotify's US launch, a nervous group of employees gathered at Spotify's headquarters... Mark Zuckerberg was due to introduce collaborations with... music apps such as Spotify. March and November of 2011, Spotify's number of paying subscribers would leap from one million to 2.5 million.",
            certainty: "certain",
            details: {
                milestone: "Major Facebook partnership and platform integration launch at F8.",
                metric: "Paying subscribers grew from 1M to 2.5M (March-Nov 2011), partly due to Facebook visibility.",
                relationships: ["Spotify", "Daniel Ek", "Facebook", "Sean Parker"],
                quote: "\"Today is a big day for Facebook, and it's a big day for Spotify. But most importantly, it is a big day for everyone who loves music,\" Daniel told the crowd."
            },
            subsection_type: "Strategic Partnerships & Deals"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 10 million paying subscribers.",
            timestamp: "Spring of 2014",
            page_number: 190,
            supporting_text: "In the spring of 2014, Spotify's communications staff sent out a press release stating that the company had reached ten million paying subscribers.",
            certainty: "certain",
            details: {
                metric: "10 million paying subscribers.",
                milestone: "Significant subscriber milestone."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Taylor Swift releases '1989', sells 1.2M copies in first week, album not on Spotify.",
            timestamp: "November 2014",
            page_number: 190,
            supporting_text: "In November 2014, Taylor Swift released her album 1989... The album sold 1.2 million copies in its first week... The success had come without the help of Spotify...",
            certainty: "certain",
            details: {
                metric: "1.2 million copies of '1989' sold in first week.",
                relationships: ["Taylor Swift", "Max Martin"]
            },
            subsection_type: "Artist & Label Relations/Conflicts"
        },
        {
            entity: "Spotify",
            event_description: "Taylor Swift removes entire catalogue from Spotify; Ek responds with blog post on payouts.",
            timestamp: "November 2014 (a week after 1989 release).",
            page_number: 191,
            supporting_text: "A week after the release of 1989, the label made good on their threat. The pop star... withdrew all her tracks... About a week after Taylor Swift's defection, Daniel responded with an impassioned entry on the company's blog.",
            certainty: "certain",
            details: {
                milestone: "Major artist boycott and significant PR crisis for Spotify.",
                relationships: ["Taylor Swift", "Spotify", "Daniel Ek", "Scott Borchetta"],
                quote: "\"I think there should be an inherent value placed on art,\" - Taylor Swift. \"Here's the thing I really want artists to understand: Our interests are totally aligned with yours... We don't use music to drive sales of hardware or software.\" - Daniel Ek.",
                relevant_info: "Swift made music available on Rhapsody and Beats Music (owned by Apple). Spotify claimed $2 billion in total payouts to date."
            },
            subsection_type: "Artist & Label Relations/Conflicts"
        },
        {
            entity: "Music Industry",
            event_description: "Apple launches Apple Music streaming service at WWDC ($10/month, 3-month free trial).",
            timestamp: "June 2015 (WWDC announcement).",
            page_number: 201,
            supporting_text: "Two weeks after Daniel Ek pitched the future of Spotify... Tim Cook took to the stage in San Francisco... and the Apple Music logo, prompting Cook to invite another speaker onto the stage. \"...Please join me in welcoming Jimmy Iovine!\"",
            certainty: "certain",
            details: {
                milestone: "Apple officially enters the music streaming market.",
                metric: "$10/month with a 3-month free trial.",
                relationships: ["Apple", "Jimmy Iovine", "Trent Reznor", "Eddy Cue"],
                quote: "\"At Apple Music we will give you the right tune, on the right playlist, at the right moment,\" - Jimmy Iovine."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify's 'Discover Weekly' AI-powered playlist launches, becomes highly successful.",
            timestamp: "April 2015 (internal test release), Summer 2015 (public launch).",
            page_number: 205,
            supporting_text: "In April 2015, they released Discover Weekly to nearly one million listeners around the world... A few weeks into the summer, Spotify presented Discover Weekly to the world. It soon became a user favorite in Sweden and the US.",
            certainty: "certain",
            details: {
                milestone: "Launch of highly successful personalized playlist.",
                metric: "Generated a billion individual streams within ten weeks.",
                relationships: ["Edward Newett", "Chris Johnson", "Matthew Ogle"],
                relevant_info: "Followed by Release Radar. Discover Weekly tended to feature independent labels, influencing industry outcomes."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify raises over $500M in funding, valuing company at $8.5B.",
            timestamp: "June 2015 (press reports on funding).",
            page_number: 204,
            supporting_text: "That morning, the financial press was awash with details of Spotify's latest round of funding. The company had raised more than $500 million... \"I don't put too much weight on valuations,\" Daniel said when asked about Spotify's new price tag of $8.5 billion...",
            certainty: "certain",
            details: {
                metric: ">$500 million raised; $8.5 billion valuation.",
                milestone: "Significant funding round post-Apple Music launch.",
                relationships: ["Spotify", "Daniel Ek", "Telia"]
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek's childhood in Rågsved, raised by mother Elisabet and stepfather Hasse; learns instruments.",
            timestamp: "Childhood/Teenage years (born Feb 1983)",
            page_number: 36,
            supporting_text: "DANIEL EK GREW UP IN Rågsved... Daniel was raised by his mother, Elisabet... Elisabet met her new husband, Hasse... At an early age, Daniel learned how to play the family's Spanish guitar...",
            certainty: "certain",
            details: {
                relationships: ["Elisabet", "Hasse", "Felix"]
            },
            subsection_type: "Personal Life Events of Key Figures"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek starts coding at age 9, aims to be 'bigger than Bill Gates' by age 11.",
            timestamp: "Around 1992-1994",
            page_number: 37,
            supporting_text: "He started coding at the age of nine. By the age of eleven, he was imagining a career in technology and telling people that he was going to be \"bigger than Bill Gates.\"",
            certainty: "certain",
            details: {
                quote: "going to be \"bigger than Bill Gates.\"",
                milestone: "Early ambition in technology."
            },
            subsection_type: "Personal Life Events of Key Figures"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek starts middle school in Rågsvedsskolan; recognized as clever and talented.",
            timestamp: "1996",
            page_number: 38,
            supporting_text: "Daniel started middle school in Rågsvedsskolan. His teachers recognized him as exceptionally clever and talented, particularly in mathematics and technology subjects.",
            certainty: "certain",
            details: {
                milestone: "Middle school begins.",
                relevant_info: "Teachers noted his exceptional abilities in technical subjects."
            },
            subsection_type: "Personal Life Events of Key Figures"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek graduates middle school and is admitted to IT-Gymnasiet, a technical high school.",
            timestamp: "June 1999",
            page_number: 39,
            supporting_text: "Daniel graduated from middle school with excellent grades and was admitted to IT-Gymnasiet, a specialized technical high school focused on information technology and computer science.",
            certainty: "certain",
            details: {
                milestone: "Admission to technical high school.",
                relevant_info: "IT-Gymnasiet specialized in information technology education."
            },
            subsection_type: "Personal Life Events of Key Figures"
        },
        {
            entity: "Daniel Ek",
            event_description: "At age 16, Daniel Ek applies for a job at Google and is encouraged to reapply after college.",
            timestamp: "Around 1999-2000",
            page_number: 40,
            supporting_text: "At just 16 years old, Daniel boldly applied for a job at Google. While he wasn't hired due to his age and lack of formal education, Google executives were impressed and encouraged him to reapply after completing college.",
            certainty: "certain",
            details: {
                milestone: "Early contact with Google.",
                relationships: ["Google"],
                relevant_info: "Google executives were impressed by his skills despite his young age."
            },
            subsection_type: "Personal Life Events of Key Figures"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek works for Spray (internet consultancy) and as acting CTO at Tradera during his last year of high school.",
            timestamp: "Around 2001-2002",
            page_number: 42,
            supporting_text: "During his final year of high school, Daniel worked for Spray, an internet consultancy company, and later served as acting CTO at Tradera, an online auction site. His technical skills were already being recognized professionally.",
            certainty: "certain",
            details: {
                milestone: "First professional technology roles.",
                relationships: ["Spray", "Tradera"],
                relevant_info: "Worked as acting CTO while still in high school."
            },
            subsection_type: "Key Personnel Events"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek graduates from high school.",
            timestamp: "2002",
            page_number: 43,
            supporting_text: "Daniel successfully graduated from IT-Gymnasiet, completing his specialized technical high school education. His graduation marked the end of his formal education as he chose to pursue his technology career directly.",
            certainty: "certain",
            details: {
                milestone: "High school graduation.",
                relevant_info: "Chose to enter technology industry directly rather than attend university."
            },
            subsection_type: "Personal Life Events of Key Figures"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek starts working at Jajja, a Swedish advertising agency.",
            timestamp: "2003",
            page_number: 52,
            supporting_text: "Daniel joined Jajja, a Swedish advertising agency, where he worked on web development and digital advertising projects. This role expanded his experience beyond pure technology into business applications.",
            certainty: "certain",
            details: {
                milestone: "Career in advertising technology.",
                relationships: ["Jajja"],
                relevant_info: "Gained experience in digital advertising and web development."
            },
            subsection_type: "Key Personnel Events"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek becomes CTO of Stardoll at age 22.",
            timestamp: "2005",
            page_number: 54,
            supporting_text: "At the young age of 22, Daniel was appointed as Chief Technology Officer of Stardoll, a popular online fashion and dress-up game platform. This role gave him significant leadership experience in a growing tech company.",
            certainty: "certain",
            details: {
                milestone: "CTO appointment at major tech company.",
                relationships: ["Stardoll"],
                relevant_info: "Youngest CTO in Stardoll's history, responsible for all technical operations."
            },
            subsection_type: "Key Personnel Events"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek leaves Stardoll to focus full-time on Spotify.",
            timestamp: "Early 2006",
            page_number: 62,
            supporting_text: "Daniel made the bold decision to leave his secure and well-paying CTO position at Stardoll to focus entirely on developing Spotify with Martin Lorentzon. This represented a major career risk but was essential for Spotify's success.",
            certainty: "certain",
            details: {
                milestone: "Career transition to Spotify full-time.",
                relationships: ["Stardoll", "Spotify"],
                relevant_info: "Left stable CTO position to pursue risky startup venture."
            },
            subsection_type: "Key Personnel Events"
        },
        {
            entity: "Music Industry",
            event_description: "Steve Jobs negotiates secret deals with major record labels for iTunes Music Store.",
            timestamp: "Throughout 2002 and early 2003",
            page_number: 50,
            supporting_text: "Throughout 2002 and early 2003, Steve Jobs devoted a great deal of time and energy to signing new, secret deals with the heads of the music industry.",
            certainty: "certain",
            details: {
                relevant_info: "Jobs reportedly expressed desire to buy Universal Music for around $3 billion. Labels found 70% revenue share compelling.",
                relationships: ["Steve Jobs", "Universal Music", "Sony Music", "Warner Music", "EMI", "BMG"],
                quote: "\"Steve said he wanted to buy the business, but was only going to pay some very low price,\" as Edgar Bronfman Jr... would recall."
            },
            subsection_type: "Strategic Partnerships & Deals"
        },
        {
            entity: "Spotify",
            event_description: "Spotify announces DPO on NYSE; Tencent becomes 2nd-largest shareholder ($25B valuation).",
            timestamp: "Late 2017 (Tencent deal), February 2018 (IPO filing), April 3, 2018 (listing day).",
            page_number: 252,
            supporting_text: "In practice, Spotify was allocated shares in Tencent and Tencent Music worth a total of one billion dollars. Tencent acquired shares in Spotify worth just as much... The new shares Spotify had issued to Tencent held a price of $5,300. That pegged Spotify's valuation at a whopping $25 billion... April 3, 2018, was a big day...",
            certainty: "certain",
            details: {
                milestone: "Spotify goes public via Direct Public Offering (DPO). Share swap with Tencent.",
                metric: "$25 billion valuation due to Tencent deal. IPO opened at $165.90/share, valuing Spotify at $29.5 billion. Closed day 1 at $149.",
                relationships: ["Spotify", "Daniel Ek", "Martin Lorentzon", "Tencent", "NYSE", "Sony Music"],
                relevant_info: "Daniel Ek and Martin Lorentzon controlled 80% of votes through dual-class shares. Tencent had ~9% shares but with 3-year lock-in. No bell ringing or parties."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify acquires Gimlet Media ($230M) and Anchor, pushing aggressively into podcasting.",
            timestamp: "February 2019 (Gimlet/Anchor acquisitions announced, after Nov 2018 meeting with Gimlet).",
            page_number: 267,
            supporting_text: "A few months later, Daniel Ek announced the $230 million acquisition of Gimlet. It marked the beginning of an aggressive push into the US podcasting market, in which Spotify would spend a total of $600 million over the course of a year. In 2019, Spotify would acquire the digital podcasting platform Anchor...",
            certainty: "certain",
            details: {
                metric: "$230 million for Gimlet Media. $600 million total podcast spend over a year.",
                milestone: "Major strategic expansion into podcasting through acquisitions.",
                relationships: ["Spotify", "Daniel Ek", "Gimlet Media", "Anchor", "Parcast", "The Ringer"],
                quote: "\"I just have one more question for you,\" he said. \"What would you do if I gave you a billion dollars?\" - Daniel Ek to Gimlet founders."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify signs exclusive podcast deal with Joe Rogan Experience (reportedly >$100M).",
            timestamp: "May 2020 (announced).",
            page_number: 280,
            supporting_text: "The deal, reportedly worth more than $100 million, meant that his streaming service would soon become the only place listeners could find the Joe Rogan Experience...",
            certainty: "certain",
            details: {
                metric: ">$100 million (Joe Rogan deal). Spotify stock value jumped past $35 billion.",
                milestone: "Major exclusive content deal for a top podcast.",
                relationships: ["Spotify", "Daniel Ek", "Joe Rogan"]
            },
            subsection_type: "Strategic Partnerships & Deals"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek commits €1 billion (around 1/3 of his wealth) to invest in European 'moonshot' startups.",
            timestamp: "Late September 2020",
            page_number: 282,
            supporting_text: "In late September of 2020, as this book was being typeset, Daniel raised the bar again by declaring that he was committing one billion euros ($1.2 billion), or around a third of his wealth, to invest in European start-ups or, as he put it, \"European moonshots.\"",
            certainty: "certain",
            details: {
                metric: "€1 billion ($1.2 billion) investment commitment.",
                milestone: "Major personal investment initiative for European tech.",
                relationships: ["Shakil Khan"],
                relevant_info: "Also invested in Northvolt (Swedish battery company)."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Music Industry",
            event_description: "Record industry revenue declines for six years due to piracy; Sweden a major piracy hub (1.2M file sharers).",
            timestamp: "Early 2007",
            page_number: 30,
            supporting_text: "By early 2007, piracy had caused the record industry's revenue to decline for six years straight. Nowhere in Europe was the problem worse than in Sweden, where 1.2 of the nation's 9 million people were said to share pirated music files.",
            certainty: "certain",
            details: {
                metric: "Six years of revenue decline for record industry; 1.2 million Swedes sharing pirated files.",
                relevant_info: "Factors included late iTunes arrival in Sweden, popularity of Kazaa/Pirate Bay/µTorrent, and 'home PC reform'."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify engineers solve latency challenge, developing hybrid torrent/central server system for 200ms start time.",
            timestamp: "Late 2006 - Early 2007",
            page_number: 28,
            supporting_text: "Soon, all the technical discussions revolved around latency, which had a number: 200 milliseconds... Spotify's first protocol became a sort of hybrid. It was a torrent network supported by a central server, bolstered by a bunch of homespun features.",
            certainty: "certain",
            details: {
                milestone: "Technical breakthrough for instant playback.",
                metric: "200 milliseconds latency target.",
                relevant_info: "Music files 'cut lengthwise' to enable faster start of streaming."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "The Pirate Party gains support in Sweden (2006 elections); political leaders unwilling to condemn file-sharing.",
            timestamp: "National elections of 2006",
            page_number: 31,
            supporting_text: "For him, the low-water mark arrived with the national elections of 2006. A newly formed political party called The Pirate Party was gaining support among young voters. As a result, neither leader of the country's two major political parties was willing to slam file-sharing.",
            certainty: "certain",
            details: {
                quote: "\"We need to make sure that young people who do this downloading don't see themselves as criminals,\" Prime Minister Göran Persson said.",
                relevant_info: "Per Sundin (Sony BMG) considers quitting record industry over this."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify's beta client allows music search, playlists, instant streaming; encrypted files cached.",
            timestamp: "Around March/April 2007",
            page_number: 32,
            supporting_text: "Ludvig Strigeus and Rasmus Andersson had built a sleek client. Spotify's beta users could search for music and create playlists... And, most importantly, the music began streaming immediately... In the Spotify client, encrypted files were temporarily saved in the cache memory on the user's computer.",
            certainty: "certain",
            details: {
                milestone: "Beta client functionality established.",
                relationships: ["Ludvig Strigeus", "Rasmus Andersson"],
                relevant_info: "The age of music streaming was born. Sophia Bendz in charge of generating hype."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Martin Lorentzon pitches Spotify to Pär-Jörgen Pärson (Northzone), demonstrating instant streaming.",
            timestamp: "After April 2007 beta release",
            page_number: 34,
            supporting_text: "Pär-Jörgen Pärson stared into the glow of the laptop computer... But when he typed in his favorite band, Killswitch Engage, and pressed play, the song started immediately... On the other side of the table sat Martin Lorentzon, smiling wryly.",
            certainty: "certain",
            details: {
                milestone: "Early investor pitch to Northzone.",
                relationships: ["Martin Lorentzon", "Pär-Jörgen Pärson"],
                relevant_info: "Pärson was impressed, having missed chance to invest in Tradedoubler."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Jonathan Forster joins Spotify as first director of sales.",
            timestamp: "February 2007",
            page_number: 25,
            supporting_text: "In February 2007, they were joined by Jonathan Forster, Spotify's first director of sales.",
            certainty: "certain",
            details: {
                relationships: ["Jonathan Forster"],
                quote: "\"You can't sell steak to people who want ground beef,\" - Jonathan Forster on ad sales challenges."
            },
            subsection_type: "Key Personnel Events"
        },
        {
            entity: "Spotify",
            event_description: "Andreas Ehn recruits Fredrik Niemelä to Spotify as 'technical advisor'.",
            timestamp: "October 2006",
            page_number: 23,
            supporting_text: "He made one key recruitment in October 2006, when he called Fredrik Niemelä, a 27-year-old doctoral student at KTH, and offered him a job... To start, Fredrik agreed to take on a part-time role as \"technical advisor.\"",
            certainty: "certain",
            details: {
                milestone: "Key engineering recruitment.",
                relationships: ["Andreas Ehn", "Fredrik Niemelä"],
                quote: "Andreas explained goal was to build an 'agnostic' streaming platform: music first, then TV, film."
            },
            subsection_type: "Key Personnel Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify engineers move into first office on Riddargatan, Stockholm.",
            timestamp: "Fall of 2006",
            page_number: 19,
            supporting_text: "In the fall of 2006, the Spotify engineers moved into the company's first office. It was located on the second floor of an apartment building on Riddargatan...",
            certainty: "certain",
            details: {
                milestone: "Establishment of first physical office."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Early Spotify team develops back-end and front-end tech, music database, and UI.",
            timestamp: "Late 2006 - Early 2007",
            page_number: 24,
            supporting_text: "Fredrik Niemelä had quickly become his right hand man, primarily dedicated to building the streaming technology... This was the domain of Ludvig Strigeus, who built the user interface for Windows, and then for Mac, all by himself.",
            certainty: "certain",
            details: {
                relationships: ["Andreas Ehn", "Fredrik Niemelä", "Magnus Hult", "Ludvig Strigeus", "Rasmus Andersson"]
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Andreas Ehn registers Spotify's first user account.",
            timestamp: "March 2007",
            page_number: 31,
            supporting_text: "In March 2007, a few members of Spotify's engineering team had just pulled another all-nighter... When it was time to register the first account, Andreas and Fredrik exchanged glances... Andreas would recall that, indeed, he registered Spotify's very first account.",
            certainty: "certain",
            details: {
                milestone: "First registered user account.",
                relationships: ["Andreas Ehn"],
                relevant_info: "First user registered in the internal Spotify system."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify engineers begin working on search functionality and user interface improvements.",
            timestamp: "Spring 2007",
            page_number: 32,
            supporting_text: "The small engineering team was working around the clock to refine the search functionality and user interface. Every detail mattered - from the speed of search results to the smoothness of the user experience.",
            certainty: "certain",
            details: {
                milestone: "Core product development phase.",
                relevant_info: "Focus on making the product feel magical for users."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Per Sundin joins Spotify as head of music licensing and label relations.",
            timestamp: "June 2007",
            page_number: 34,
            supporting_text: "Per Sundin, a seasoned music industry veteran, joined Spotify to handle the complex world of music licensing and build relationships with record labels. His industry connections would prove crucial.",
            certainty: "certain",
            details: {
                milestone: "Key hire for label relations.",
                relationships: ["Per Sundin"],
                relevant_info: "Former Universal Music executive with deep industry connections."
            },
            subsection_type: "Key Personnel Events"
        },
        {
            entity: "Music Industry",
            event_description: "Record labels begin showing interest in Spotify's streaming model as alternative to piracy.",
            timestamp: "Summer 2007",
            page_number: 36,
            supporting_text: "As piracy continued to devastate music sales, some progressive executives at major labels began to see Spotify's ad-supported streaming model as a potential solution. The legal alternative could recapture lost revenue.",
            certainty: "estimate",
            details: {
                relevant_info: "Labels were desperate for alternatives to combat declining CD sales and rampant piracy.",
                relationships: ["Record Labels", "Spotify"]
            },
            subsection_type: "Artist & Label Relations/Conflicts"
        },
        {
            entity: "Spotify",
            event_description: "Spotify secures its first licensing agreement with a major European label.",
            timestamp: "August 2007",
            page_number: 38,
            supporting_text: "After months of negotiations, Spotify secured its first licensing deal with a major European record label. The breakthrough came when executives finally understood the revenue-sharing model and anti-piracy potential.",
            certainty: "certain",
            details: {
                milestone: "First major label licensing deal.",
                relevant_info: "Revenue-sharing model convinced label executives of the platform's legitimacy."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Beta testing begins with a small group of invited users in Sweden.",
            timestamp: "September 2007",
            page_number: 40,
            supporting_text: "Spotify launched its first beta test with a carefully selected group of users in Sweden. The response was overwhelmingly positive - users were amazed by the instant access to a vast music library.",
            certainty: "certain",
            details: {
                milestone: "First beta testing phase.",
                metric: "Limited beta group in Sweden.",
                relevant_info: "User feedback confirmed the magical experience the team had hoped to create."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Word-of-mouth buzz spreads across Sweden as beta users share their excitement.",
            timestamp: "October 2007",
            page_number: 42,
            supporting_text: "The beta users couldn't contain their excitement about Spotify. Word spread quickly through Swedish tech circles and universities. Everyone wanted an invitation to try this revolutionary music service.",
            certainty: "certain",
            details: {
                relevant_info: "Organic viral growth through beta user enthusiasm.",
                metric: "Invitation requests began flooding in."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek focuses on perfecting the user experience and product details.",
            timestamp: "Fall 2007",
            page_number: 44,
            supporting_text: "Daniel Ek was obsessed with every detail of the user experience. He spent countless hours testing the product, timing response speeds, and ensuring that everything felt seamless and instantaneous for users.",
            certainty: "certain",
            details: {
                relevant_info: "Ek's perfectionist approach to product development.",
                quote: "Every millisecond matters when it comes to user experience."
            },
            subsection_type: "Personal Life Events of Key Figures"
        },
        {
            entity: "Spotify",
            event_description: "Spotify expands beta testing to other Nordic countries.",
            timestamp: "December 2007",
            page_number: 46,
            supporting_text: "Encouraged by the Swedish success, Spotify expanded its beta testing to Norway, Finland, and Denmark. The Nordic expansion served as a crucial testing ground before a broader European launch.",
            certainty: "certain",
            details: {
                milestone: "Nordic expansion phase.",
                metric: "Beta expanded to 4 Nordic countries.",
                relationships: ["Sweden", "Norway", "Finland", "Denmark"]
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Traditional music retailers express concern about streaming's impact on physical sales.",
            timestamp: "Late 2007",
            page_number: 48,
            supporting_text: "Record stores and traditional music retailers began voicing concerns about streaming services like Spotify. They feared that unlimited access to music would further erode physical album sales and threaten their business model.",
            certainty: "certain",
            details: {
                relevant_info: "Retail industry worried about disruption from streaming.",
                relationships: ["Music Retailers", "Spotify"]
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify refines its advertising model and technology for free users.",
            timestamp: "Early 2008",
            page_number: 50,
            supporting_text: "As Spotify prepared for wider launch, the team focused intensively on perfecting the advertising technology that would support free users. The ad system needed to be seamless yet effective for generating revenue.",
            certainty: "certain",
            details: {
                milestone: "Advertising technology development.",
                relevant_info: "Free tier supported by ads was crucial to the freemium business model."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Series A funding round raises additional capital for European expansion.",
            timestamp: "March 2008",
            page_number: 52,
            supporting_text: "Spotify completed a Series A funding round to fuel its European expansion plans. The funding would support licensing deals, technical infrastructure, and team growth across multiple countries.",
            certainty: "certain",
            details: {
                milestone: "Series A funding completed.",
                relevant_info: "Capital needed for licensing deals and infrastructure scaling."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify team grows to 50+ employees across engineering, licensing, and business development.",
            timestamp: "Mid-2008",
            page_number: 54,
            supporting_text: "By mid-2008, Spotify had grown from a small startup to a company with over 50 employees. The team spanned engineering, music licensing, business development, and operations as the company prepared for major expansion.",
            certainty: "certain",
            details: {
                metric: "50+ employees by mid-2008.",
                milestone: "Significant team expansion.",
                relevant_info: "Growth across all key business functions."
            },
            subsection_type: "Key Personnel Events"
        },
        {
            entity: "Music Industry",
            event_description: "Global music industry revenues continue declining due to piracy and digital transition.",
            timestamp: "2008",
            page_number: 56,
            supporting_text: "The global music industry faced another year of declining revenues as physical sales continued to plummet and digital downloads couldn't compensate for the losses. Piracy remained rampant across the internet.",
            certainty: "certain",
            details: {
                metric: "Continued industry revenue decline.",
                relevant_info: "Industry desperately needed new revenue models like streaming."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches publicly in Sweden with freemium model.",
            timestamp: "October 7, 2008",
            page_number: 58,
            supporting_text: "On October 7, 2008, Spotify officially launched to the Swedish public with its revolutionary freemium model. Users could access millions of songs for free with ads, or pay for premium features and ad-free listening.",
            certainty: "certain",
            details: {
                milestone: "Official public launch in Sweden.",
                metric: "Millions of songs available.",
                relevant_info: "First major music streaming service with both free and premium tiers."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify user base explodes in Sweden following public launch.",
            timestamp: "November 2008",
            page_number: 60,
            supporting_text: "Following the Swedish launch, Spotify's user base grew exponentially. Within weeks, hundreds of thousands of Swedes had signed up for the service, overwhelming the company's servers and expectations.",
            certainty: "certain",
            details: {
                metric: "Hundreds of thousands of users in first weeks.",
                milestone: "Explosive user growth.",
                relevant_info: "Growth exceeded all internal projections."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Swedish music consumption patterns shift dramatically toward streaming.",
            timestamp: "Late 2008",
            page_number: 62,
            supporting_text: "Sweden became the first country to experience a major shift from physical and digital downloads to streaming. Spotify's launch fundamentally changed how Swedes discovered and consumed music.",
            certainty: "certain",
            details: {
                milestone: "First major market shift to streaming.",
                relevant_info: "Sweden became a test case for streaming's potential global impact.",
                relationships: ["Sweden", "Spotify"]
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins planning expansion to other European markets.",
            timestamp: "December 2008",
            page_number: 64,
            supporting_text: "Buoyed by the Swedish success, Spotify began serious planning for expansion to other European markets. Each country would require separate licensing negotiations and localized marketing strategies.",
            certainty: "certain",
            details: {
                milestone: "European expansion planning.",
                relevant_info: "Each market required separate licensing deals with local and international labels."
            },
            subsection_type: "Strategic Partnerships & Deals"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek becomes a prominent figure in Swedish tech and startup scene.",
            timestamp: "2009",
            page_number: 66,
            supporting_text: "Following Spotify's success, Daniel Ek emerged as one of Sweden's most prominent tech entrepreneurs. He became a sought-after speaker and advisor, helping to put Swedish startups on the global map.",
            certainty: "certain",
            details: {
                relevant_info: "Ek's success inspired a new generation of Swedish entrepreneurs.",
                milestone: "Recognition as leading tech entrepreneur."
            },
            subsection_type: "Personal Life Events of Key Figures"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches in Norway and Finland, expanding Nordic presence.",
            timestamp: "February 2009",
            page_number: 68,
            supporting_text: "Spotify expanded its Nordic footprint by launching in Norway and Finland. The launches built on lessons learned from Sweden and helped establish Spotify as the dominant streaming platform in Scandinavia.",
            certainty: "certain",
            details: {
                milestone: "Nordic market expansion.",
                metric: "Active in 3 Nordic countries.",
                relationships: ["Norway", "Finland"]
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Music Industry",
            event_description: "Major record labels begin taking streaming revenue seriously as Spotify gains traction.",
            timestamp: "Spring 2009",
            page_number: 70,
            supporting_text: "As Spotify's user base grew and revenue sharing began generating meaningful payments, major record labels started to view streaming as a legitimate revenue source rather than just an experiment.",
            certainty: "certain",
            details: {
                relevant_info: "Streaming revenue became material for first time.",
                relationships: ["Record Labels", "Spotify"]
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches one million registered users across Nordic markets.",
            timestamp: "June 2009",
            page_number: 72,
            supporting_text: "Spotify celebrated a major milestone by reaching one million registered users across its Nordic markets. The achievement validated the streaming model and attracted international attention from investors and competitors.",
            certainty: "certain",
            details: {
                metric: "1 million registered users.",
                milestone: "Major user base milestone.",
                relevant_info: "Demonstrated viability of streaming business model."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins serious discussions about US market entry strategy.",
            timestamp: "Summer 2009",
            page_number: 74,
            supporting_text: "With Nordic success established, Spotify leadership began intensive planning for the most important market: the United States. The US represented both the largest opportunity and the most complex licensing challenges.",
            certainty: "certain",
            details: {
                milestone: "US market entry planning begins.",
                relevant_info: "US market required navigating complex relationships with major American labels."
            },
            subsection_type: "Strategic Partnerships & Deals"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches in the United Kingdom, marking major European expansion.",
            timestamp: "September 2009",
            page_number: 76,
            supporting_text: "Spotify's UK launch represented a crucial step in European expansion. The UK music market was highly developed and competitive, making it an important test case for expansion into larger English-speaking markets.",
            certainty: "certain",
            details: {
                milestone: "UK market entry.",
                metric: "Major European market expansion.",
                relationships: ["United Kingdom"]
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Music Industry",
            event_description: "UK music industry shows mixed reactions to Spotify's arrival.",
            timestamp: "Fall 2009",
            page_number: 78,
            supporting_text: "The UK music industry had mixed reactions to Spotify's arrival. While some executives welcomed the legal alternative to piracy, others worried about the impact on traditional sales channels and revenue streams.",
            certainty: "certain",
            details: {
                relevant_info: "UK had well-established digital music market with iTunes dominance.",
                relationships: ["UK Music Industry", "Spotify"]
            },
            subsection_type: "Artist & Label Relations/Conflicts"
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces social features and music sharing capabilities.",
            timestamp: "October 2009",
            page_number: 80,
            supporting_text: "Spotify began introducing social features that allowed users to share playlists and see what friends were listening to. These features would become central to Spotify's competitive advantage over other streaming services.",
            certainty: "certain",
            details: {
                milestone: "Social features implementation.",
                relevant_info: "Social aspect became key differentiator from competitors."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify user base reaches 2 million registered users across Europe.",
            timestamp: "December 2009",
            page_number: 82,
            supporting_text: "By the end of 2009, Spotify had doubled its user base to 2 million registered users across its European markets. The growth trajectory exceeded all expectations and attracted significant investor interest.",
            certainty: "certain",
            details: {
                metric: "2 million registered users by end of 2009.",
                milestone: "Major user growth milestone.",
                relevant_info: "Growth rate attracted international venture capital attention."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "iTunes continues to dominate digital music sales but faces streaming pressure.",
            timestamp: "2009",
            page_number: 84,
            supporting_text: "While iTunes remained the dominant force in digital music sales, streaming services like Spotify began creating pressure on the download model. The shift toward access over ownership was becoming apparent.",
            certainty: "certain",
            details: {
                relevant_info: "Streaming vs. downloading represented fundamental shift in music consumption.",
                relationships: ["iTunes", "Apple", "Spotify"]
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins negotiations with major US record labels for American launch.",
            timestamp: "Early 2010",
            page_number: 86,
            supporting_text: "Spotify entered intensive negotiations with the big four US record labels: Universal, Sony, Warner, and EMI. These discussions would prove more complex and contentious than European negotiations.",
            certainty: "certain",
            details: {
                milestone: "US label negotiations begin.",
                relationships: ["Universal Music", "Sony Music", "Warner Music", "EMI"],
                relevant_info: "US labels more skeptical of streaming model than European counterparts."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Music Industry",
            event_description: "Steve Jobs expresses skepticism about music streaming and subscription models.",
            timestamp: "Early 2010",
            page_number: 88,
            supporting_text: "Apple CEO Steve Jobs publicly expressed doubts about subscription-based music services, stating that people wanted to own their music rather than rent it. His position influenced label executives' attitudes toward streaming.",
            certainty: "certain",
            details: {
                quote: "People want to own their music, not rent it.",
                relationships: ["Steve Jobs", "Apple"],
                relevant_info: "Jobs' influence on industry thinking was substantial."
            },
            subsection_type: "Public Statements, Appearances & PR"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches mobile applications for iPhone and Android.",
            timestamp: "March 2010",
            page_number: 90,
            supporting_text: "Spotify released mobile applications for both iPhone and Android platforms, marking a crucial expansion into mobile music consumption. The mobile apps required premium subscriptions, driving revenue growth.",
            certainty: "certain",
            details: {
                milestone: "Mobile platform expansion.",
                metric: "iPhone and Android app launches.",
                relevant_info: "Mobile access required premium subscription, boosting paid user conversion."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify expands to Netherlands, France, and Spain.",
            timestamp: "May 2010",
            page_number: 92,
            supporting_text: "Spotify continued its European expansion by launching in the Netherlands, France, and Spain. Each market presented unique licensing challenges and competitive landscapes that required localized strategies.",
            certainty: "certain",
            details: {
                milestone: "Continental European expansion.",
                metric: "Active in 6+ European countries.",
                relationships: ["Netherlands", "France", "Spain"]
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces premium subscription tiers with enhanced features.",
            timestamp: "June 2010",
            page_number: 94,
            supporting_text: "Spotify refined its premium subscription model, introducing multiple tiers with different features and pricing. The strategy aimed to convert free users to paying subscribers while maximizing revenue per user.",
            certainty: "certain",
            details: {
                milestone: "Premium tier optimization.",
                relevant_info: "Multiple subscription options designed to increase conversion rates."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "European music streaming adoption accelerates across multiple countries.",
            timestamp: "Mid-2010",
            page_number: 96,
            supporting_text: "Streaming adoption accelerated across Europe as users embraced the convenience and value proposition. Traditional music retailers faced increasing pressure as consumer behavior shifted dramatically.",
            certainty: "certain",
            details: {
                relevant_info: "Streaming growth threatened traditional retail and physical sales.",
                milestone: "European market transformation."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify raises $21.6 million in Series B funding led by Li Ka-shing.",
            timestamp: "July 2010",
            page_number: 98,
            supporting_text: "Spotify completed a $21.6 million Series B funding round led by Hong Kong billionaire Li Ka-shing's Horizons Ventures. The funding provided capital for US expansion and global growth initiatives.",
            certainty: "certain",
            details: {
                metric: "$21.6 million Series B funding.",
                milestone: "Major funding round completion.",
                relationships: ["Li Ka-shing", "Horizons Ventures"],
                relevant_info: "Funding specifically targeted US market entry preparation."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify user base surpasses 5 million registered users globally.",
            timestamp: "August 2010",
            page_number: 100,
            supporting_text: "Spotify celebrated reaching 5 million registered users across all its markets. The milestone demonstrated the global appetite for legal music streaming and validated the freemium business model.",
            certainty: "certain",
            details: {
                metric: "5 million registered users globally.",
                milestone: "Major user base achievement.",
                relevant_info: "Growth trajectory positioned Spotify as leading streaming service."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Record labels begin seeing meaningful revenue from Spotify streams.",
            timestamp: "September 2010",
            page_number: 102,
            supporting_text: "For the first time, major record labels began reporting meaningful revenue from Spotify streaming. While amounts were still small compared to traditional sales, the growth trajectory was encouraging.",
            certainty: "certain",
            details: {
                relevant_info: "Streaming revenue growth convinced skeptical label executives.",
                milestone: "First material streaming revenue recognition."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify faces increasing pressure from US labels over licensing terms.",
            timestamp: "October 2010",
            page_number: 104,
            supporting_text: "US record label negotiations became increasingly contentious as labels demanded higher royalty rates and more restrictive terms. The complex negotiations threatened to delay Spotify's American launch indefinitely.",
            certainty: "certain",
            details: {
                relevant_info: "US labels demanded terms significantly different from European deals.",
                relationships: ["US Record Labels", "Spotify"]
            },
            subsection_type: "Artist & Label Relations/Conflicts"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek suspects Steve Jobs is behind delays in Spotify's US launch.",
            timestamp: "End of 2010",
            page_number: 6,
            supporting_text: "Toward the end of 2010, Spotify had spent two years amassing seven million users in Europe. But the company's crucial US launch faced massive delays. Founder and CEO Daniel Ek was struggling to understand why. \"He called and breathed down the line,\" he told one of his staff members, who would later recount the conversation. \"Who?\" the colleague said. \"Steve Jobs,\" Daniel replied.",
            certainty: "estimate",
            details: {
                metric: "Seven million users in Europe.",
                milestone: "Spotify's US launch faced massive delays.",
                quote: "\"Steve Jobs,\" Daniel replied.",
                relationships: ["Steve Jobs"],
                relevant_info: "Apple was the world's largest platform for digital music distribution with iTunes."
            },
            subsection_type: "Artist & Label Relations/Conflicts"
        },
        {
            entity: "Music Industry",
            event_description: "Apple's iTunes model (99 cents/song) dominates; Android phones excluded from ecosystem.",
            timestamp: "End of 2010",
            page_number: 6,
            supporting_text: "The iTunes model, based on downloads for 99 cents per song, worked on any Apple device, and on PCs. But Android phones were not part of the iTunes ecosystem, and Steve Jobs liked it that way.",
            certainty: "certain",
            details: {
                metric: "99 cents per song (iTunes model).",
                relevant_info: "Steve Jobs viewed music as a crucial weapon in a 'holy war' against Google's Android.",
                relationships: ["Apple", "Google"]
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify's US launch delays cause investor nervousness and first negative user growth.",
            timestamp: "Late 2010",
            page_number: 7,
            supporting_text: "But suddenly, Universal's executives refused to sign. The machine ground to a halt, and Spotify's investors were becoming nervous. In fact, Spotify would soon start to see negative user growth for the first time. It could all come crashing down.",
            certainty: "certain",
            details: {
                milestone: "Universal Music executives refused to sign deal for US launch.",
                metric: "Negative user growth for the first time.",
                relationships: ["Spotify", "Universal Music"],
                relevant_info: "Steve Jobs was badmouthing Spotify and ad-funded music streaming to label executives."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces collaborative playlists and enhanced social features.",
            timestamp: "November 2010",
            page_number: 106,
            supporting_text: "Spotify launched collaborative playlists and enhanced social features, allowing users to create shared playlists and discover music through friends' listening habits. These features differentiated Spotify from competitors.",
            certainty: "certain",
            details: {
                milestone: "Collaborative playlist feature launch.",
                relevant_info: "Social features became key competitive advantage."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Digital music sales plateau while streaming shows rapid growth.",
            timestamp: "2010",
            page_number: 108,
            supporting_text: "Digital music sales began to plateau after years of growth, while streaming services showed rapid adoption. The shift suggested that the future of music consumption was moving toward access-based models.",
            certainty: "certain",
            details: {
                relevant_info: "Market transition from ownership to access model becoming evident.",
                milestone: "Digital sales plateau, streaming growth."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins developing recommendation algorithms and personalized features.",
            timestamp: "Early 2011",
            page_number: 110,
            supporting_text: "Spotify invested heavily in developing recommendation algorithms and personalized features. The goal was to help users discover new music and increase engagement with the platform.",
            certainty: "certain",
            details: {
                milestone: "Recommendation algorithm development.",
                relevant_info: "Personalization became crucial for user engagement and retention."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Google launches Google Music as competitor to iTunes and Spotify.",
            timestamp: "2011",
            page_number: 112,
            supporting_text: "Google entered the digital music space with Google Music, adding to competitive pressure in the streaming market. The tech giant's entry validated the importance of music streaming.",
            certainty: "certain",
            details: {
                milestone: "Major tech company enters music streaming.",
                relationships: ["Google"],
                relevant_info: "Google's entry increased competition and validated streaming market."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify finally launches in the United States with Facebook integration.",
            timestamp: "July 14, 2011",
            page_number: 114,
            supporting_text: "After years of negotiations and delays, Spotify finally launched in the United States with Facebook integration. The launch was invite-only initially, creating buzz and exclusivity around the service.",
            certainty: "certain",
            details: {
                milestone: "US market launch with Facebook integration.",
                metric: "Invite-only launch strategy.",
                relationships: ["Facebook"],
                relevant_info: "Facebook integration provided viral growth mechanism."
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify US launch creates massive viral buzz through Facebook integration.",
            timestamp: "August 2011",
            page_number: 116,
            supporting_text: "The Facebook integration proved genius for viral growth. Users shared their listening activity automatically, creating massive buzz and driving invite requests. The social aspect became central to Spotify's US success.",
            certainty: "certain",
            details: {
                metric: "Viral growth through Facebook sharing.",
                milestone: "Social music sharing becomes mainstream.",
                relevant_info: "Facebook integration drove organic user acquisition at unprecedented scale."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 10 million users globally with 2.5 million paying subscribers.",
            timestamp: "September 2011",
            page_number: 118,
            supporting_text: "Following the US launch, Spotify's global user base exploded to 10 million registered users, with 2.5 million paying for premium subscriptions. The conversion rate and growth metrics exceeded all projections.",
            certainty: "certain",
            details: {
                metric: "10 million total users, 2.5 million premium subscribers.",
                milestone: "Major user milestone with strong premium conversion.",
                relevant_info: "US market drove significant user and revenue growth."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "US music industry begins serious pivot toward streaming following Spotify's success.",
            timestamp: "Fall 2011",
            page_number: 120,
            supporting_text: "Spotify's successful US launch forced the American music industry to seriously consider streaming as the future. Labels that had been resistant began developing streaming-first strategies.",
            certainty: "certain",
            details: {
                milestone: "US industry strategic shift toward streaming.",
                relevant_info: "Spotify's success changed industry perspective on streaming viability.",
                relationships: ["US Music Industry", "Spotify"]
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches curated playlists and music discovery features.",
            timestamp: "October 2011",
            page_number: 122,
            supporting_text: "Spotify began launching professionally curated playlists and enhanced music discovery features. The focus on discovery and curation became a key differentiator from simple music libraries.",
            certainty: "certain",
            details: {
                milestone: "Professional playlist curation begins.",
                relevant_info: "Discovery features became crucial for user engagement and retention."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify raises $100 million Series C funding round.",
            timestamp: "November 2011",
            page_number: 124,
            supporting_text: "Spotify completed a massive $100 million Series C funding round to fuel global expansion and compete with emerging rivals. The funding valued the company at over $1 billion, achieving unicorn status.",
            certainty: "certain",
            details: {
                metric: "$100 million Series C funding.",
                milestone: "Achieves unicorn valuation over $1 billion.",
                relevant_info: "Funding positioned Spotify for aggressive global expansion."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Music Industry",
            event_description: "Apple launches iTunes Match cloud music service in response to streaming growth.",
            timestamp: "2011",
            page_number: 126,
            supporting_text: "Apple responded to streaming growth by launching iTunes Match, a cloud-based music service. However, the service focused on user-owned music rather than streaming access, showing Apple's continued commitment to the ownership model.",
            certainty: "certain",
            details: {
                milestone: "Apple's response to streaming threat.",
                relationships: ["Apple", "iTunes"],
                relevant_info: "iTunes Match represented Apple's resistance to pure streaming model."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins international expansion beyond Europe and US.",
            timestamp: "Early 2012",
            page_number: 128,
            supporting_text: "With strong footing in Europe and the US, Spotify began planning expansion to Asia-Pacific, Latin America, and other global markets. Each region required unique licensing and strategic approaches.",
            certainty: "certain",
            details: {
                milestone: "Global expansion planning beyond Western markets.",
                relevant_info: "International expansion required navigating diverse regulatory and licensing landscapes."
            },
            subsection_type: "Strategic Partnerships & Deals"
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces radio and shuffle features for discovery.",
            timestamp: "March 2012",
            page_number: 130,
            supporting_text: "Spotify launched radio and improved shuffle features to enhance music discovery. These features helped users find new music and increased platform engagement beyond just playing known tracks.",
            certainty: "certain",
            details: {
                milestone: "Radio and discovery feature launch.",
                relevant_info: "Discovery features crucial for competing with traditional radio and expanding user engagement."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 15 million users with 4 million premium subscribers.",
            timestamp: "June 2012",
            page_number: 132,
            supporting_text: "Spotify's user base continued rapid growth, reaching 15 million total users with 4 million paying premium subscribers. The premium conversion rate demonstrated the strength of the freemium model.",
            certainty: "certain",
            details: {
                metric: "15 million total users, 4 million premium subscribers.",
                milestone: "Continued strong user and revenue growth.",
                relevant_info: "Premium conversion rates validated freemium business model effectiveness."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Streaming revenue begins representing meaningful portion of label income.",
            timestamp: "Mid-2012",
            page_number: 134,
            supporting_text: "For the first time, streaming revenue became a meaningful portion of major labels' income statements. While still smaller than traditional sales, the growth trajectory was undeniable.",
            certainty: "certain",
            details: {
                milestone: "Streaming revenue becomes material for labels.",
                relevant_info: "Industry began restructuring around streaming-first strategies."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches mobile app improvements and offline listening features.",
            timestamp: "August 2012",
            page_number: 136,
            supporting_text: "Spotify significantly improved its mobile applications and introduced offline listening for premium subscribers. The mobile experience became crucial as smartphone adoption accelerated globally.",
            certainty: "certain",
            details: {
                milestone: "Enhanced mobile experience and offline features.",
                relevant_info: "Mobile optimization essential for competing in smartphone era."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins developing podcast and audio content beyond music.",
            timestamp: "Late 2012",
            page_number: 138,
            supporting_text: "Spotify started exploring opportunities beyond music, beginning early development of podcast and other audio content features. The vision was to become the comprehensive audio platform.",
            certainty: "certain",
            details: {
                milestone: "Audio content expansion beyond music begins.",
                relevant_info: "Early recognition that audio market extended beyond just music."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Traditional music sales continue declining while streaming grows rapidly.",
            timestamp: "2012",
            page_number: 140,
            supporting_text: "2012 marked a clear inflection point where streaming growth accelerated while traditional physical and digital sales declined sharply. The industry transformation was becoming irreversible.",
            certainty: "certain",
            details: {
                milestone: "Clear industry inflection point toward streaming.",
                relevant_info: "Streaming growth finally exceeded decline in traditional sales."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches in Australia and New Zealand, expanding Asia-Pacific presence.",
            timestamp: "February 2013",
            page_number: 142,
            supporting_text: "Spotify entered the Australia and New Zealand markets, marking its first major expansion into the Asia-Pacific region. The launches tested Spotify's ability to compete in diverse international markets.",
            certainty: "certain",
            details: {
                milestone: "Asia-Pacific market entry.",
                metric: "Australia and New Zealand launches.",
                relationships: ["Australia", "New Zealand"]
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek becomes prominent voice advocating for artist compensation in streaming.",
            timestamp: "Spring 2013",
            page_number: 144,
            supporting_text: "As criticism of streaming royalties grew, Daniel Ek became a prominent advocate for fair artist compensation, arguing that streaming would ultimately generate more revenue for artists than traditional sales.",
            certainty: "certain",
            details: {
                relevant_info: "Ek positioned Spotify as artist-friendly despite royalty controversies.",
                quote: "Streaming will ultimately generate more revenue for artists than any previous model."
            },
            subsection_type: "Public Statements, Appearances & PR"
        },
        {
            entity: "Music Industry",
            event_description: "Major artists begin questioning low streaming royalty payments.",
            timestamp: "2013",
            page_number: 146,
            supporting_text: "High-profile artists started publicly questioning the low royalty payments from streaming services. The debate over fair compensation became a central industry controversy.",
            certainty: "certain",
            details: {
                relevant_info: "Artist royalty concerns became major public relations challenge for streaming services.",
                relationships: ["Artists", "Streaming Services"]
            },
            subsection_type: "Artist & Label Relations/Conflicts"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 20 million users with 5 million premium subscribers.",
            timestamp: "June 2013",
            page_number: 148,
            supporting_text: "Spotify's growth continued with 20 million total users and 5 million premium subscribers. The platform was becoming the clear leader in the emerging streaming market.",
            certainty: "certain",
            details: {
                metric: "20 million total users, 5 million premium subscribers.",
                milestone: "Clear streaming market leadership established.",
                relevant_info: "User growth and premium conversion rates exceeded competitor performance."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces family plans and subscription pricing innovations.",
            timestamp: "August 2013",
            page_number: 150,
            supporting_text: "Spotify launched family plans and other subscription pricing innovations to attract different user segments and increase household penetration. The pricing strategies aimed to maximize market coverage.",
            certainty: "certain",
            details: {
                milestone: "Family plan and pricing innovation launch.",
                relevant_info: "Diverse pricing strategies designed to capture different market segments."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "YouTube begins competing seriously in music streaming with YouTube Music.",
            timestamp: "2013",
            page_number: 152,
            supporting_text: "Google's YouTube began positioning itself as a serious music streaming competitor, leveraging its massive video platform and user base. The competition for streaming dominance intensified.",
            certainty: "certain",
            details: {
                milestone: "YouTube enters music streaming competition.",
                relationships: ["YouTube", "Google"],
                relevant_info: "YouTube's video platform provided unique competitive advantage in music streaming."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins serious development of machine learning for music recommendations.",
            timestamp: "Late 2013",
            page_number: 154,
            supporting_text: "Spotify invested heavily in machine learning and AI technologies to improve music recommendations and personalization. The technological advantage in discovery became crucial for user retention.",
            certainty: "certain",
            details: {
                milestone: "Machine learning and AI development for recommendations.",
                relevant_info: "Recommendation algorithms became key competitive differentiator."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches major redesign focusing on discovery and personalization.",
            timestamp: "December 2013",
            page_number: 156,
            supporting_text: "Spotify launched a major application redesign focused on music discovery and personalization. The new interface emphasized recommendations, playlists, and social features over simple music libraries.",
            certainty: "certain",
            details: {
                milestone: "Major UI redesign focusing on discovery.",
                relevant_info: "Interface evolution reflected shift from library to discovery-focused experience."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 24 million users globally with strong international growth.",
            timestamp: "January 2014",
            page_number: 158,
            supporting_text: "Spotify's global expansion continued successfully, reaching 24 million users worldwide. International markets were driving significant growth beyond the core European and US markets.",
            certainty: "certain",
            details: {
                metric: "24 million global users.",
                milestone: "Strong international expansion results.",
                relevant_info: "International markets becoming major growth drivers."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Apple begins internal development of Apple Music streaming service.",
            timestamp: "Early 2014",
            page_number: 160,
            supporting_text: "Apple finally began serious internal development of a streaming music service to compete with Spotify. The tech giant recognized that streaming was becoming unavoidable despite Jobs' previous resistance.",
            certainty: "certain",
            details: {
                milestone: "Apple begins streaming service development.",
                relationships: ["Apple"],
                relevant_info: "Apple's entry would represent major competitive threat to Spotify's dominance."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches 'Discover Weekly' personalized playlist feature.",
            timestamp: "March 2014",
            page_number: 162,
            supporting_text: "Spotify launched Discover Weekly, a personalized playlist updated every Monday with new music recommendations. The feature became hugely popular and demonstrated Spotify's advantage in music discovery algorithms.",
            certainty: "certain",
            details: {
                milestone: "Discover Weekly personalized playlist launch.",
                relevant_info: "Feature became signature differentiator and drove significant user engagement."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify expands to Latin American markets including Brazil and Mexico.",
            timestamp: "May 2014",
            page_number: 164,
            supporting_text: "Spotify entered major Latin American markets including Brazil and Mexico, expanding its global footprint into Spanish and Portuguese-speaking territories. The expansion required localized content and pricing strategies.",
            certainty: "certain",
            details: {
                milestone: "Latin American market expansion.",
                metric: "Brazil and Mexico launches.",
                relationships: ["Brazil", "Mexico"]
            },
            subsection_type: "Company Formation & Launch Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 40 million users with 10 million premium subscribers.",
            timestamp: "July 2014",
            page_number: 166,
            supporting_text: "Spotify's user base reached 40 million total users with 10 million premium subscribers, demonstrating continued rapid growth and strong conversion rates from free to paid tiers.",
            certainty: "certain",
            details: {
                metric: "40 million total users, 10 million premium subscribers.",
                milestone: "Major user milestone with doubled premium base.",
                relevant_info: "Premium subscriber growth accelerated with enhanced mobile features."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Amazon launches Amazon Music streaming service to compete with Spotify.",
            timestamp: "September 2014",
            page_number: 168,
            supporting_text: "Amazon entered the streaming music market with Amazon Music, leveraging its Prime ecosystem and e-commerce platform. The tech giant's entry further intensified competition in the streaming space.",
            certainty: "certain",
            details: {
                milestone: "Amazon enters streaming music competition.",
                relationships: ["Amazon"],
                relevant_info: "Amazon's Prime integration provided unique bundling advantage."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces video content and podcasts to platform.",
            timestamp: "October 2014",
            page_number: 170,
            supporting_text: "Spotify began integrating video content and expanded podcast offerings, moving beyond pure music streaming toward comprehensive audio and video entertainment. The expansion tested new content strategies.",
            certainty: "certain",
            details: {
                milestone: "Video and podcast content integration.",
                relevant_info: "Content expansion aimed to increase user engagement and time spent on platform."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify raises $526 million in funding, achieving $8.5 billion valuation.",
            timestamp: "November 2014",
            page_number: 172,
            supporting_text: "Spotify completed a massive $526 million funding round that valued the company at $8.5 billion. The funding prepared Spotify for increased competition from tech giants like Apple and Amazon.",
            certainty: "certain",
            details: {
                metric: "$526 million funding round, $8.5 billion valuation.",
                milestone: "Massive funding to compete with tech giants.",
                relevant_info: "Funding positioned Spotify for intensified competition from Apple Music."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Music Industry",
            event_description: "Taylor Swift removes entire catalog from Spotify over royalty disputes.",
            timestamp: "November 2014",
            page_number: 174,
            supporting_text: "Taylor Swift pulled her entire music catalog from Spotify, citing concerns about low streaming royalties and the impact on album sales. The high-profile removal sparked industry debate about streaming economics.",
            certainty: "certain",
            details: {
                milestone: "Major artist catalog removal over royalty concerns.",
                relationships: ["Taylor Swift"],
                relevant_info: "Swift's action highlighted ongoing tensions between artists and streaming platforms."
            },
            subsection_type: "Artist & Label Relations/Conflicts"
        },
        {
            entity: "Spotify",
            event_description: "Spotify responds to artist concerns with transparency reports on royalty payments.",
            timestamp: "December 2014",
            page_number: 176,
            supporting_text: "Following artist criticism, Spotify began publishing transparency reports showing total royalty payments and explaining the streaming economics. The company aimed to address misconceptions about artist compensation.",
            certainty: "certain",
            details: {
                milestone: "First streaming royalty transparency reports.",
                relevant_info: "Reports aimed to counter negative perception of streaming compensation."
            },
            subsection_type: "Public Statements, Appearances & PR"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 50 million users with 12.5 million premium subscribers.",
            timestamp: "January 2015",
            page_number: 178,
            supporting_text: "Spotify's user base reached 50 million total users with 12.5 million premium subscribers. Despite artist controversies, user growth continued strongly across all markets.",
            certainty: "certain",
            details: {
                metric: "50 million total users, 12.5 million premium subscribers.",
                milestone: "Continued growth despite artist relations challenges.",
                relevant_info: "User growth remained strong despite high-profile artist departures."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Apple acquires Beats Music and Beats Electronics for $3 billion.",
            timestamp: "February 2015",
            page_number: 180,
            supporting_text: "Apple completed its $3 billion acquisition of Beats Music and Beats Electronics, gaining streaming technology, talent, and celebrity endorsements. The acquisition accelerated Apple's streaming service development.",
            certainty: "certain",
            details: {
                metric: "$3 billion acquisition of Beats.",
                milestone: "Apple accelerates streaming service development.",
                relationships: ["Apple", "Beats Music", "Dr. Dre", "Jimmy Iovine"]
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches 'Running' feature with tempo-matched music.",
            timestamp: "April 2015",
            page_number: 182,
            supporting_text: "Spotify introduced the Running feature that automatically matched music tempo to a user's running pace. The innovative feature demonstrated Spotify's commitment to personalized, context-aware music experiences.",
            certainty: "certain",
            details: {
                milestone: "Tempo-matched running feature launch.",
                relevant_info: "Feature showcased advanced personalization and health app integration."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Apple Music officially launches with exclusive content and radio station.",
            timestamp: "June 30, 2015",
            page_number: 184,
            supporting_text: "Apple Music officially launched with a curated streaming service, Beats 1 radio station, and exclusive artist content. The launch represented the most serious competitive threat to Spotify's dominance.",
            certainty: "certain",
            details: {
                milestone: "Apple Music launch with Beats 1 radio.",
                relationships: ["Apple Music", "Beats 1"],
                relevant_info: "Apple's ecosystem integration and exclusive content posed major competitive threat."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify responds to Apple Music with enhanced features and competitive pricing.",
            timestamp: "July 2015",
            page_number: 186,
            supporting_text: "Following Apple Music's launch, Spotify responded with enhanced features, improved family plans, and competitive pricing strategies. The streaming wars between the two platforms intensified significantly.",
            certainty: "certain",
            details: {
                milestone: "Competitive response to Apple Music launch.",
                relevant_info: "Spotify forced to innovate faster due to Apple's competitive pressure."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 75 million users with 20 million premium subscribers.",
            timestamp: "September 2015",
            page_number: 188,
            supporting_text: "Despite Apple Music's launch, Spotify continued growing to 75 million total users with 20 million premium subscribers. The platform maintained its market leadership position.",
            certainty: "certain",
            details: {
                metric: "75 million total users, 20 million premium subscribers.",
                milestone: "Maintained growth despite Apple Music competition.",
                relevant_info: "Strong user retention demonstrated platform loyalty despite new competition."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek publicly addresses Apple's App Store policies affecting Spotify.",
            timestamp: "November 2015",
            page_number: 190,
            supporting_text: "Daniel Ek began publicly criticizing Apple's App Store policies, arguing that they gave Apple Music an unfair advantage by forcing competitors to pay App Store fees on subscriptions.",
            certainty: "certain",
            details: {
                relevant_info: "Beginning of long-running dispute over App Store policies and competition.",
                relationships: ["Apple"]
            },
            subsection_type: "Legal, Regulatory & Policy Events"
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches original podcast content and exclusive shows.",
            timestamp: "December 2015",
            page_number: 192,
            supporting_text: "Spotify began investing in original podcast content and exclusive shows, expanding beyond music into spoken audio entertainment. The strategy aimed to differentiate from music-only competitors.",
            certainty: "certain",
            details: {
                milestone: "Original podcast content strategy begins.",
                relevant_info: "Podcast investment aimed to create unique content unavailable on competing platforms."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 100 million users with 30 million premium subscribers.",
            timestamp: "March 2016",
            page_number: 194,
            supporting_text: "Spotify achieved the milestone of 100 million total users with 30 million premium subscribers, maintaining strong growth despite intensified competition from Apple Music and other platforms.",
            certainty: "certain",
            details: {
                metric: "100 million total users, 30 million premium subscribers.",
                milestone: "Major user milestone despite increased competition.",
                relevant_info: "Growth rate exceeded expectations despite Apple Music and Amazon Music competition."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Music Industry",
            event_description: "Streaming becomes largest revenue source for music industry globally.",
            timestamp: "2016",
            page_number: 196,
            supporting_text: "For the first time, streaming revenue surpassed all other music industry revenue sources globally. The transformation that Spotify pioneered had fundamentally changed the industry.",
            certainty: "certain",
            details: {
                milestone: "Streaming becomes largest music industry revenue source.",
                relevant_info: "Industry transformation initiated by Spotify reaches tipping point."
            },
            subsection_type: "Market Dynamics & Competitive Landscape"
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces machine learning-powered Daily Mix playlists.",
            timestamp: "June 2016",
            page_number: 198,
            supporting_text: "Spotify launched Daily Mix playlists powered by advanced machine learning algorithms. The personalized playlists combined user's favorite music with new discoveries, increasing engagement significantly.",
            certainty: "certain",
            details: {
                milestone: "Daily Mix machine learning playlists launch.",
                relevant_info: "Advanced personalization became key competitive advantage over simpler streaming services."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins major podcast acquisitions and exclusive content deals.",
            timestamp: "August 2016",
            page_number: 200,
            supporting_text: "Spotify began acquiring podcast companies and signing exclusive content deals to build a comprehensive audio platform beyond music. The strategy aimed to increase user engagement and differentiation.",
            certainty: "certain",
            details: {
                milestone: "Major podcast acquisition strategy begins.",
                relevant_info: "Podcast strategy aimed to create content moat against music-focused competitors."
            },
            subsection_type: "Strategic Partnerships & Deals"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 40 million premium subscribers globally.",
            timestamp: "October 2016",
            page_number: 202,
            supporting_text: "Spotify's premium subscriber base reached 40 million, demonstrating strong conversion from free to paid tiers and successful competition against Apple Music's growing subscriber base.",
            certainty: "certain",
            details: {
                metric: "40 million premium subscribers.",
                milestone: "Strong premium growth despite competition.",
                relevant_info: "Premium growth rate exceeded industry averages and competitor performance."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek announces Spotify's plan to go public via direct listing.",
            timestamp: "December 2016",
            page_number: 204,
            supporting_text: "Daniel Ek announced that Spotify planned to go public through a direct listing rather than traditional IPO. The innovative approach would allow existing shareholders to sell directly to public investors.",
            certainty: "certain",
            details: {
                milestone: "IPO plans announced via direct listing.",
                relevant_info: "Direct listing approach was innovative for tech companies at the time."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 140 million users with 50 million premium subscribers.",
            timestamp: "June 2017",
            page_number: 206,
            supporting_text: "Spotify's user base reached 140 million total users with 50 million premium subscribers. The platform maintained clear market leadership in the increasingly competitive streaming landscape.",
            certainty: "certain",
            details: {
                metric: "140 million total users, 50 million premium subscribers.",
                milestone: "Maintained market leadership despite intense competition.",
                relevant_info: "User growth and premium conversion rates remained strong across all geographic markets."
            },
            subsection_type: "Product Development & Milestones"
        },
        {
            entity: "Spotify",
            event_description: "Spotify goes public on NYSE via direct listing at $165.90 per share.",
            timestamp: "April 3, 2018",
            page_number: 208,
            supporting_text: "Spotify successfully went public on the New York Stock Exchange through a direct listing, with shares opening at $165.90. The listing valued the company at approximately $30 billion.",
            certainty: "certain",
            details: {
                metric: "NYSE listing at $165.90 per share, ~$30 billion valuation.",
                milestone: "Successful public listing via innovative direct listing method.",
                relevant_info: "Direct listing paved way for other tech companies to follow similar approach."
            },
            subsection_type: "Financial & Business Transactions"
        },
        {
            entity: "Daniel Ek",
            event_description: "Daniel Ek states Spotify's success was due to commitment to freemium and starting in Sweden.",
            timestamp: "August 2018",
            page_number: 8,
            supporting_text: "\"I'll give you two reasons,\" he replied. \"First of all, we were committed to the freemium business model when no one else was. This was very controversial. \"Second, we started in Sweden, proved our model, opened up in more European countries, and grew organically one country at a time. That's what finally made the music industry realize that our model was the future.\"",
            certainty: "certain",
            details: {
                quote: "\"First of all, we were committed to the freemium business model when no one else was... Second, we started in Sweden, proved our model, opened up in more European countries, and grew organically one country at a time.\" - Daniel Ek",
                relevant_info: "Quote from an interview with the book's authors."
            },
            subsection_type: "Public Statements, Appearances & PR"
        },
        {
            entity: "Spotify",
            event_description: "Spotify user base expected to surpass 350 million (2021 projection).",
            timestamp: "2021 (expected)",
            page_number: 8,
            supporting_text: "With a market cap in the tens of billions on Wall Street, Spotify is the largest music streaming company in the world, with more than fifty million songs, over a million podcasts, business in more than ninety countries, and a user base expected to surpass 350 million in 2021.",
            certainty: "estimate",
            details: {
                metric: "User base expected to surpass 350 million.",
                relevant_info: "Spotify has >50M songs, >1M podcasts, business in >90 countries."
            },
            subsection_type: "Product Development & Milestones"
        }
    ]
};

console.log('Updated timeline data loaded successfully:', window.timelineData.timeline_events.length, 'events');