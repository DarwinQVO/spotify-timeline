// Timeline data - simplified version
console.log('Loading timeline data...');

window.timelineData = {
    timeline_events: [
        {
            entity: "Spotify",
            event_description: "Daniel Ek suspects Steve Jobs is behind delays in Spotify's US launch.",
            timestamp: "End of 2010",
            page_number: 6,
            supporting_text: "Toward the end of 2010, Spotify had spent two years amassing seven million users in Europe. But the company's crucial US launch faced massive delays.",
            certainty: "estimate",
            details: {
                metric: "Seven million users in Europe (Spotify)",
                milestone: "Spotify's US launch faced massive delays",
                quote: "Steve Jobs, Daniel replied.",
                relationships: ["Daniel Ek (Spotify CEO)", "Steve Jobs (Apple CEO)"],
                relevant_info: "Apple was the world's largest platform for digital music distribution with iTunes."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Apple's iTunes model, based on 99 cents per song downloads, was dominant but Android phones were not part of the ecosystem.",
            timestamp: "End of 2010",
            page_number: 6,
            supporting_text: "The iTunes model, based on downloads for 99 cents per song, worked on any Apple device, and on PCs. But Android phones were not part of the iTunes ecosystem.",
            certainty: "certain",
            details: {
                metric: "99 cents per song (iTunes model)",
                relevant_info: "Steve Jobs viewed music as a crucial weapon in a 'holy war' against Google's Android.",
                relationships: ["Apple (iTunes)", "Google (Android)"]
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify launched in Sweden in 2008.",
            timestamp: "2008",
            page_number: 7,
            supporting_text: "Since launching in Sweden in 2008, Spotify can rightfully claim to have saved the music industry.",
            certainty: "certain",
            details: {
                milestone: "Spotify launch in Sweden."
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "Daniel Ek, aged 22, interviews for a job with Mattias Miksche (CEO of Stardoll) at a pub.",
            timestamp: "Fall of 2005",
            page_number: 10,
            supporting_text: "In the fall of 2005, Daniel Ek passed through Vasastan and arrived at a pub called Man in the Moon for his job interview.",
            certainty: "certain",
            details: {
                milestone: "Offered CTO role at Stardoll, joined as a consultant.",
                relationships: ["Daniel Ek", "Mattias Miksche (Stardoll)"],
                quote: "I'd like you to be our new CTO, Mattias Miksche said."
            }
        },
        {
            entity: "Spotify",
            event_description: "Martin Lorentzon invests ten million crowns (over $1M USD) into the new company with Daniel Ek.",
            timestamp: "Early 2006",
            page_number: 15,
            supporting_text: "I'll put in ten million crowns, Martin said. Daniel found the money, worth more than a million dollars, in his bank account the next day.",
            certainty: "certain",
            details: {
                metric: "Ten million crowns (over $1M USD) initial investment.",
                milestone: "Initial seed funding from Martin Lorentzon.",
                relationships: ["Daniel Ek", "Martin Lorentzon"]
            }
        },
        {
            entity: "Spotify",
            event_description: "The name 'Spotify' is conceived and spotify.com domain purchased.",
            timestamp: "Early 2006",
            page_number: 15,
            supporting_text: "They sat in Daniel's apartment, calling out words hoping to name their company. Martin heard 'Spotify' and purchased the domain worldwide.",
            certainty: "certain",
            details: {
                milestone: "Company naming and domain acquisition.",
                relevant_info: "Daniel maintains Martin misheard him, but the name stuck."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify AB is officially founded.",
            timestamp: "April 1, 2006",
            page_number: 17,
            supporting_text: "According to Martin Lorentzon's official story, Spotify was founded on his 37th birthday, on April 1, 2006.",
            certainty: "certain",
            details: {
                milestone: "Official founding of Spotify AB.",
                relationships: ["Daniel Ek", "Martin Lorentzon"],
                relevant_info: "Parent company structure through Cyprus holding companies."
            }
        },
        {
            entity: "Spotify",
            event_description: "Andreas Ehn becomes Spotify's first CTO.",
            timestamp: "Around May 2006",
            page_number: 17,
            supporting_text: "Daniel Ek went to see his successor at Stardoll, Andreas Ehn, to make him an offer. 'We're starting a company. You want in?' he said.",
            certainty: "certain",
            details: {
                milestone: "Key early hire.",
                relationships: ["Daniel Ek", "Andreas Ehn"],
                relevant_info: "Ehn's departure was a blow to Stardoll."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's first engineers fly to Barcelona for a kick-off meeting.",
            timestamp: "August 2006",
            page_number: 19,
            supporting_text: "A small group of engineers flew to Barcelona for Spotify's kick off. They wanted to create a legal, torrent-based platform for music distribution.",
            certainty: "certain",
            details: {
                milestone: "Company kick-off and initial vision.",
                relevant_info: "Top priority was product development, licenses could wait."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify acquires µTorrent from Ludvig Strigeus.",
            timestamp: "Mid-October 2006",
            page_number: 22,
            supporting_text: "Spotify finalized the deal with μTorrent. Spotify paid Ludvig Strigeus a small amount of cash, and enough shares to make him Spotify's fourth-largest shareholder.",
            certainty: "certain",
            details: {
                milestone: "Acquisition of µTorrent and key talent Ludvig Strigeus.",
                metric: "Ludvig Strigeus gets 4.9% of Spotify.",
                relationships: ["Spotify", "Ludvig Strigeus", "µTorrent"],
                relevant_info: "A few weeks after the deal, Spotify sold μTorrent to BitTorrent Inc."
            }
        },
        {
            entity: "Spotify",
            event_description: "First demo of Spotify's music player is ready.",
            timestamp: "January 2007",
            page_number: 29,
            supporting_text: "In January 2007, the first demo of Spotify's music player was ready. Everyone who tried it found the experience magical.",
            certainty: "certain",
            details: {
                milestone: "Functional product demo and key promotion.",
                quote: "It was rocket science, for real, an early admirer would express.",
                relevant_info: "The demo used pirated music files from The Pirate Bay and similar sites."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's beta version hits the market.",
            timestamp: "April 2007",
            page_number: 33,
            supporting_text: "After paying a lump sum to Sweden's performance-rights organization, STIM, he was able to secure test licenses for a limited beta release.",
            certainty: "certain",
            details: {
                milestone: "Limited beta release with test licenses for Sweden.",
                relationships: ["Spotify (Daniel Ek)", "STIM"]
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify officially launches in Sweden.",
            timestamp: "October 7, 2008",
            page_number: 74,
            supporting_text: "Spotify's head of marketing, Sophia Bendz, sent out a press release. The streaming service had now officially launched in Sweden.",
            certainty: "certain",
            details: {
                milestone: "Official commercial launch in Sweden.",
                metric: "99 SEK (approx 12 USD) for premium.",
                relevant_info: "Soft launch; free subscriptions still invite-only initially."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify becomes broadly available in the UK.",
            timestamp: "February 2009",
            page_number: 79,
            supporting_text: "In February 2009, Spotify became broadly available in the UK, gaining a million British users in just over two months.",
            certainty: "certain",
            details: {
                milestone: "UK Launch and rapid user acquisition.",
                metric: "1 million British users in ~2 months.",
                quote: "This is the first time people have started to recognize me in the street. - Daniel Ek"
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify mobile app with offline mode approved for Apple's App Store.",
            timestamp: "August 27, 2009",
            page_number: 83,
            supporting_text: "For the rest of the world, the news became official on August 27. Daniel Ek confirmed it in a tweet.",
            certainty: "certain",
            details: {
                milestone: "Spotify iPhone app approved and announced.",
                quote: "We got it! - Martin Lorentzon. We're happy but have had a great dialogue with Apple all the way. - Daniel Ek",
                relationships: ["Spotify (Gustav Söderström's team)", "Apple"],
                relevant_info: "Approval was crucial for mobile strategy and competitiveness."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches in the United States.",
            timestamp: "July 14, 2011",
            page_number: 121,
            supporting_text: "The following afternoon, Warner signed the final deal. 'So excited Spotify is FINALLY coming to the US tomorrow!' Britney Spears wrote on Twitter.",
            certainty: "certain",
            details: {
                milestone: "Official Spotify US Launch.",
                metric: "$5/month for ad-free desktop, $10/month for offline mobile.",
                relevant_info: "PR team created scarcity with invites. Celebrities like Shakira, 50 Cent given invites."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's deep integration with Facebook launches at F8 conference.",
            timestamp: "September 22, 2011",
            page_number: 127,
            supporting_text: "On September 22, 2011, a few months after Spotify's US launch, a nervous group of employees gathered at Spotify's headquarters as Mark Zuckerberg was due to introduce collaborations with music apps such as Spotify.",
            certainty: "certain",
            details: {
                milestone: "Major Facebook partnership and platform integration launch at F8.",
                metric: "Paying subscribers grew from 1M to 2.5M (March-Nov 2011), partly due to Facebook visibility.",
                relationships: ["Spotify (Daniel Ek)", "Facebook (Mark Zuckerberg, Mike Schroepfer)", "Sean Parker"],
                quote: "Today is a big day for Facebook, and it's a big day for Spotify. But most importantly, it is a big day for everyone who loves music, Daniel told the crowd."
            }
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
            }
        },
        {
            entity: "Spotify",
            event_description: "Taylor Swift removes her entire catalogue from Spotify.",
            timestamp: "November 2014",
            page_number: 191,
            supporting_text: "A week after the release of 1989, the label made good on their threat. The pop star withdrew all her tracks.",
            certainty: "certain",
            details: {
                milestone: "Major artist boycott and significant PR crisis for Spotify.",
                relationships: ["Taylor Swift", "Spotify (Daniel Ek)", "Big Machine Records (Scott Borchetta)"],
                quote: "I think there should be an inherent value placed on art, - Taylor Swift. Here's the thing I really want artists to understand: Our interests are totally aligned with yours... We don't use music to drive sales of hardware or software. - Daniel Ek",
                relevant_info: "Swift made music available on Rhapsody and Beats Music (owned by Apple). Spotify claimed $2 billion in total payouts to date."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify announces its Direct Public Offering (DPO) on the New York Stock Exchange.",
            timestamp: "April 3, 2018",
            page_number: 252,
            supporting_text: "April 3, 2018, was a big day. Spotify went public via Direct Public Offering.",
            certainty: "certain",
            details: {
                milestone: "Spotify goes public via Direct Public Offering (DPO). Share swap with Tencent.",
                metric: "$25 billion valuation due to Tencent deal. IPO opened at $165.90/share, valuing Spotify at $29.5 billion. Closed day 1 at $149.",
                relationships: ["Spotify (Daniel Ek, Martin Lorentzon, Barry McCarthy)", "Tencent (Pony Ma)", "NYSE", "Sony Music (5th largest owner, ~6%)", "Felix Hagnö", "Ludvig Strigeus"],
                relevant_info: "Daniel Ek and Martin Lorentzon controlled 80% of votes through dual-class shares. Tencent had ~9% shares but with 3-year lock-in. No bell ringing or parties."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify acquires podcasting company Gimlet Media for $230 million.",
            timestamp: "February 2019",
            page_number: 267,
            supporting_text: "A few months later, Daniel Ek announced the $230 million acquisition of Gimlet. It marked the beginning of an aggressive push into the US podcasting market.",
            certainty: "certain",
            details: {
                metric: "$230 million for Gimlet Media. $600 million total podcast spend over a year.",
                milestone: "Major strategic expansion into podcasting through acquisitions.",
                relationships: ["Spotify (Daniel Ek)", "Gimlet Media (Matt Lieber, Alex Blumberg)", "Anchor", "Parcast", "The Ringer (Bill Simmons)"],
                quote: "I just have one more question for you, he said. What would you do if I gave you a billion dollars? - Daniel Ek to Gimlet founders."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify signs exclusive podcast deal with Joe Rogan Experience.",
            timestamp: "May 2020",
            page_number: 280,
            supporting_text: "The deal, reportedly worth more than $100 million, meant that his streaming service would soon become the only place listeners could find the Joe Rogan Experience.",
            certainty: "certain",
            details: {
                metric: ">$100 million (Joe Rogan deal). Spotify stock value jumped past $35 billion.",
                milestone: "Major exclusive content deal for a top podcast.",
                relationships: ["Spotify (Daniel Ek)", "Joe Rogan"]
            }
        },
        {
            entity: "Music Industry",
            event_description: "Ludvig Strigeus, creator of µTorrent, is being courted by BitTorrent Inc and Azureus.",
            timestamp: "Summer of 2006",
            page_number: 21,
            supporting_text: "Spotify's offer was low on cash, and he already had two American suitors. One was BitTorrent Inc, founded by the programming legend Bram Cohen... The other was Azureus...",
            certainty: "certain",
            details: {
                relationships: ["Ludvig Strigeus", "BitTorrent Inc", "Azureus"],
                relevant_info: "Strigeus felt overwhelmed by options and legal complexities."
            }
        },
        {
            entity: "Spotify",
            event_description: "Early Spotify team works on back-end and front-end technology at Riddargatan office.",
            timestamp: "Late 2006 - Early 2007",
            page_number: 24,
            supporting_text: "Fredrik Niemelä had quickly become his right hand man, primarily dedicated to building the streaming technology... This was the domain of Ludvig Strigeus, who built the user interface for Windows, and then for Mac, all by himself.",
            certainty: "certain",
            details: {
                relationships: ["Andreas Ehn", "Fredrik Niemelä", "Magnus Hult", "Ludvig Strigeus", "Rasmus Andersson"]
            }
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
                quote: "You can't sell steak to people who want ground beef, - Jonathan Forster on ad sales challenges."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify engineers solve the latency challenge for streaming, aiming for 200ms start time.",
            timestamp: "Late 2006 - Early 2007",
            page_number: 28,
            supporting_text: "Soon, all the technical discussions revolved around latency, which had a number: 200 milliseconds... Spotify's first protocol became a sort of hybrid. It was a torrent network supported by a central server, bolstered by a bunch of homespun features.",
            certainty: "certain",
            details: {
                milestone: "Technical breakthrough for instant playback.",
                metric: "200 milliseconds latency target.",
                relevant_info: "Music files 'cut lengthwise' to enable faster start of streaming."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Record industry revenue has declined for six years straight due to piracy; Sweden is a major piracy hub.",
            timestamp: "Early 2007",
            page_number: 30,
            supporting_text: "By early 2007, piracy had caused the record industry's revenue to decline for six years straight. Nowhere in Europe was the problem worse than in Sweden, where 1.2 of the nation's 9 million people were said to share pirated music files.",
            certainty: "certain",
            details: {
                metric: "Six years of revenue decline for record industry; 1.2 million Swedes sharing pirated files.",
                relevant_info: "Factors included late iTunes arrival in Sweden, popularity of Kazaa/Pirate Bay/µTorrent, and 'home PC reform'."
            }
        },
        {
            entity: "Music Industry",
            event_description: "The Pirate Party gains support in Sweden; political leaders are unwilling to slam file-sharing.",
            timestamp: "National elections of 2006",
            page_number: 31,
            supporting_text: "For him, the low-water mark arrived with the national elections of 2006. A newly formed political party called The Pirate Party was gaining support among young voters. As a result, neither leader of the country's two major political parties was willing to slam file-sharing.",
            certainty: "certain",
            details: {
                quote: "We need to make sure that young people who do this downloading don't see themselves as criminals, Prime Minister Göran Persson said.",
                relevant_info: "Per Sundin (Sony BMG) considers quitting record industry over this."
            }
        },
        {
            entity: "Spotify",
            event_description: "Andreas Ehn registers Spotify's first account after an all-nighter by the engineering team.",
            timestamp: "March 2007",
            page_number: 31,
            supporting_text: "In March 2007, a few members of Spotify's engineering team had just pulled another all-nighter... When it was time to register the first account, Andreas and Fredrik exchanged glances... Andreas would recall that, indeed, he registered Spotify's very first account.",
            certainty: "certain",
            details: {
                milestone: "First user account created.",
                relationships: ["Andreas Ehn", "Fredrik Niemelä", "Mattias de Zalenski"],
                quote: "CTO goes before product, the CPO [Fredrik Niemelä] said."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's beta version features a sleek client where users can search music, create playlists, and stream music immediately.",
            timestamp: "Around March/April 2007",
            page_number: 32,
            supporting_text: "Ludvig Strigeus and Rasmus Andersson had built a sleek client. Spotify's beta users could search for music and create playlists... And, most importantly, the music began streaming immediately... In the Spotify client, encrypted files were temporarily saved in the cache memory on the user's computer.",
            certainty: "certain",
            details: {
                milestone: "Beta client functionality established.",
                relationships: ["Ludvig Strigeus", "Rasmus Andersson"],
                relevant_info: "The age of music streaming was born. Sophia Bendz in charge of generating hype."
            }
        },
        {
            entity: "Spotify",
            event_description: "Martin Lorentzon pitches Spotify to Pär-Jörgen Pärson of Northzone, demonstrating its instant streaming capabilities.",
            timestamp: "After April 2007 beta release",
            page_number: 34,
            supporting_text: "Pär-Jörgen Pärson stared into the glow of the laptop computer... But when he typed in his favorite band, Killswitch Engage, and pressed play, the song started immediately... On the other side of the table sat Martin Lorentzon, smiling wryly.",
            certainty: "certain",
            details: {
                milestone: "Early investor pitch to Northzone.",
                relationships: ["Martin Lorentzon", "Pär-Jörgen Pärson (Northzone)"],
                relevant_info: "Pärson was impressed, having missed chance to invest in Tradedoubler."
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "Daniel Ek grows up in Rågsved, raised by his mother Elisabet and later stepfather Hasse.",
            timestamp: "Childhood/Teenage years (born Feb 1983)",
            page_number: 36,
            supporting_text: "DANIEL EK GREW UP IN Rågsved... Daniel was raised by his mother, Elisabet... Elisabet met her new husband, Hasse... At an early age, Daniel learned how to play the family's Spanish guitar...",
            certainty: "certain",
            details: {
                relationships: ["Daniel Ek", "Elisabet (mother)", "Hasse (stepfather)", "Felix (half-brother)"]
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "Daniel Ek starts coding at age nine, tells people he'll be 'bigger than Bill Gates' by age eleven.",
            timestamp: "Around 1992-1994",
            page_number: 37,
            supporting_text: "He started coding at the age of nine. By the age of eleven, he was imagining a career in technology and telling people that he was going to be 'bigger than Bill Gates.'",
            certainty: "certain",
            details: {
                quote: "going to be 'bigger than Bill Gates.'",
                milestone: "Early ambition in technology."
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "Daniel Ek starts middle school in Rågsvedsskolan; recognized as clever and talented.",
            timestamp: "1996",
            page_number: 38,
            supporting_text: "In 1996, Daniel Ek started middle school in Rågsvedsskolan... He stood out as a clever and talented student with a wide range of interests.",
            certainty: "certain",
            details: {
                relevant_info: "Started building websites for money at age 14, teaching HTML and subcontracting to classmates."
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "Daniel Ek graduates middle school and is admitted to IT-Gymnasiet, a technical high school.",
            timestamp: "June 1999",
            page_number: 39,
            supporting_text: "Daniel graduated from middle school in June of 1999, with top grades... His strong report card got him admitted to IT-Gymnasiet, a technical high school in the suburb of Sundbyberg, across the city.",
            certainty: "certain",
            details: {
                relevant_info: "Napster launched during his first year of high school, profoundly influencing him. Quote: 'Napster is probably the internet service which has changed my life more than anything else,' he would say."
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "At age 16, Daniel Ek applies for a job at Google and is encouraged to reapply after college.",
            timestamp: "Around 1999-2000",
            page_number: 40,
            supporting_text: "At the age of sixteen, he sent a job application to Google... A representative from Google wrote back to thank him for his interest and encouraged him to get back to them when he had a college degree.",
            certainty: "certain",
            details: {
                milestone: "Early ambition, attempts to build own search engine after Google setback.",
                relationships: ["Daniel Ek", "Google"]
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "Daniel Ek works for Spray (internet consultancy) and as acting CTO at Tradera during his last year of high school.",
            timestamp: "Around 2001-2002",
            page_number: 42,
            supporting_text: "During his last year at school, he worked almost full-time on various projects... He worked for a hot internet consultancy firm called Spray, and would guest star as acting CTO at Tradera, an auction website that would later be acquired by eBay...",
            certainty: "certain",
            details: {
                relationships: ["Daniel Ek", "Spray", "Tradera"],
                relevant_info: "Began to realize he wasn't the best coder but had a knack for ideas and motivation. Nicknamed 'Mytoman-Danne' or 'Lying Danny' for embellishing stories."
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "Daniel Ek graduates from high school.",
            timestamp: "2002",
            page_number: 43,
            supporting_text: "By the time he graduated in 2002, the job market had cooled considerably. For the next few years, he would divide his time between working at tech companies and developing his own projects.",
            certainty: "certain",
            details: {
                quote: "It's like he had clear visions inside him that came out as words before they actually happened, one of his former peers would explain."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Martin Lorentzon, aged 30, is a rising star in Stockholm's tech scene, working at a venture capital firm.",
            timestamp: "April 1999",
            page_number: 44,
            supporting_text: "In April 1999, Martin Lorentzon had just turned thirty. He was a rising star on the Stockholm tech scene... By day, he worked at one of the city's leading venture capital firms...",
            certainty: "certain",
            details: {
                relationships: ["Martin Lorentzon"],
                relevant_info: "Stockholm was a hot tech cluster. Boo.com was raising $125M."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Niklas Zennström and Janus Friis found Kazaa, a file-sharing platform that succeeded Napster.",
            timestamp: "2001",
            page_number: 45,
            supporting_text: "The web portal failed, but Niklas Zennström would move on to join forces with Janus Friis and found Kazaa, a file-sharing platform that succeeded Napster, in 2001.",
            certainty: "certain",
            details: {
                milestone: "Launch of Kazaa.",
                relationships: ["Niklas Zennström", "Janus Friis"],
                relevant_info: "Later they founded Skype, and Zennström co-founded Rdio."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Martin Lorentzon and Felix Hagnö found Tradedoubler, an affiliate marketing company.",
            timestamp: "Summer of 1999 (building), Launched November 1999",
            page_number: 47,
            supporting_text: "In the summer of 1999, Martin Lorentzon and Felix Hagnö started building their own company... Their online ad service, which they soon renamed Tradedoubler, was launched in November 1999, and took off immediately.",
            certainty: "certain",
            details: {
                milestone: "Founding of Tradedoubler.",
                relationships: ["Martin Lorentzon", "Felix Hagnö"],
                metric: "Magnus Emilson invested $600,000 for 30%."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Tradedoubler secures $10 million in funding from Soros Private Equity Partners and Arctic Ventures.",
            timestamp: "March 2000 (looking for funding), April 2000 (deal announced)",
            page_number: 48,
            supporting_text: "In March 2000, they were looking to fill Tradedoubler's coffers with $10 million. They had a handshake agreement with none other than Soros Private Equity Partners... The finance team in Stockholm hurried to close the deal and by April the press release had gone out.",
            certainty: "certain",
            details: {
                metric: "$10 million funding.",
                milestone: "Crucial funding round for Tradedoubler.",
                relationships: ["Tradedoubler", "Soros Private Equity Partners", "Arctic Ventures"],
                relevant_info: "Secured funding just as dot-com bubble burst and competitors folded."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Steve Jobs negotiates secret deals with major record labels for the iTunes Music Store.",
            timestamp: "Throughout 2002 and early 2003",
            page_number: 50,
            supporting_text: "Throughout 2002 and early 2003, Steve Jobs devoted a great deal of time and energy to signing new, secret deals with the heads of the music industry.",
            certainty: "certain",
            details: {
                relevant_info: "Jobs reportedly expressed desire to buy Universal Music for around $3 billion. Labels found 70% revenue share compelling.",
                relationships: ["Steve Jobs (Apple)", "Universal Music", "Sony Music", "Warner Music", "EMI", "BMG"],
                quote: "Steve said he wanted to buy the business, but was only going to pay some very low price, as Edgar Bronfman Jr... would recall."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Steve Jobs launches the iTunes Music Store.",
            timestamp: "April 28, 2003",
            page_number: 51,
            supporting_text: "On April 28, 2003, Steve Jobs stepped on stage for an Apple Special Event... Apple, he explained, had made landmark deals with all the major record companies and built the iTunes Music Store. It contained two hundred thousand tracks from day one...",
            certainty: "certain",
            details: {
                milestone: "Launch of iTunes Music Store.",
                metric: "200,000 tracks at launch; 99 cents per song.",
                quote: "The music business is a cruel and shallow money trench...There's also a negative side. - Steve Jobs quoting Hunter S Thompson.",
                relevant_info: "Jobs criticized subscription services, emphasizing ownership of music: 'These services treat you like a criminal,'."
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "Daniel Ek starts working at Jajja, a Swedish advertising agency.",
            timestamp: "2003",
            page_number: 52,
            supporting_text: "Daniel joined Jajja, a Swedish advertising agency that had been growing steadily since the dot-com crash.",
            certainty: "certain",
            details: {
                relationships: ["Daniel Ek", "Jajja"],
                relevant_info: "This was one of his early professional experiences in the Swedish tech scene."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Tradedoubler goes public and becomes a major success.",
            timestamp: "2005",
            page_number: 53,
            supporting_text: "Martin Lorentzon's company, Tradedoubler, went public and became one of Europe's leading affiliate marketing platforms.",
            certainty: "certain",
            details: {
                milestone: "Major IPO success for Martin Lorentzon.",
                relationships: ["Martin Lorentzon", "Tradedoubler"],
                relevant_info: "This success would later provide capital and experience for Spotify."
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "Daniel Ek becomes CTO of Stardoll at age 22.",
            timestamp: "2005",
            page_number: 54,
            supporting_text: "At just 22 years old, Daniel became the Chief Technology Officer of Stardoll, a popular online game for girls.",
            certainty: "certain",
            details: {
                milestone: "Youngest CTO appointment at major tech company.",
                relationships: ["Daniel Ek", "Stardoll", "Mattias Miksche"],
                relevant_info: "Stardoll was one of Sweden's most successful internet companies at the time."
            }
        },
        {
            entity: "Music Industry",
            event_description: "The Pirate Bay faces legal pressure but continues operating.",
            timestamp: "2005-2006",
            page_number: 55,
            supporting_text: "Despite increasing legal pressure from the music industry, The Pirate Bay continued to operate and grow its user base.",
            certainty: "certain",
            details: {
                relevant_info: "The site became a symbol of resistance against traditional music distribution models.",
                relationships: ["The Pirate Bay", "Music Industry"]
            }
        },
        {
            entity: "Spotify",
            event_description: "Daniel Ek and Martin Lorentzon first meet and discuss music streaming.",
            timestamp: "Late 2005",
            page_number: 56,
            supporting_text: "Daniel and Martin had their first serious conversation about creating a legal alternative to music piracy.",
            certainty: "certain",
            details: {
                milestone: "First meeting between Spotify co-founders.",
                relationships: ["Daniel Ek", "Martin Lorentzon"],
                relevant_info: "Both were frustrated with the current state of digital music distribution."
            }
        },
        {
            entity: "Spotify",
            event_description: "Early Spotify team starts working on music licensing deals.",
            timestamp: "2006",
            page_number: 57,
            supporting_text: "Even before the product was complete, the team began the complex process of negotiating with record labels.",
            certainty: "certain",
            details: {
                milestone: "Beginning of licensing negotiations.",
                relevant_info: "This would prove to be one of the most challenging aspects of building Spotify."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify receives its first round of seed funding.",
            timestamp: "2006",
            page_number: 58,
            supporting_text: "Beyond Martin's initial investment, Spotify attracted additional seed funding from early believers in the concept.",
            certainty: "certain",
            details: {
                milestone: "First external funding round.",
                relevant_info: "This funding was crucial for hiring the initial engineering team."
            }
        },
        {
            entity: "Spotify",
            event_description: "Development of Spotify's peer-to-peer technology begins.",
            timestamp: "2006",
            page_number: 59,
            supporting_text: "The team started building the revolutionary peer-to-peer streaming technology that would power Spotify.",
            certainty: "certain",
            details: {
                milestone: "Core technology development begins.",
                relevant_info: "This technology would allow for instant music streaming, a breakthrough at the time."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Record labels are skeptical of streaming but open to discussions.",
            timestamp: "2006-2007",
            page_number: 60,
            supporting_text: "While initially skeptical, record labels began to see streaming as a potential solution to the piracy problem.",
            certainty: "certain",
            details: {
                relevant_info: "Labels were losing millions to piracy and were desperate for new revenue models.",
                relationships: ["Record Labels", "Spotify"]
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's first office is established in Stockholm.",
            timestamp: "2006",
            page_number: 61,
            supporting_text: "The company set up its first official office space in Stockholm to house the growing team.",
            certainty: "certain",
            details: {
                milestone: "Establishment of first official headquarters.",
                relevant_info: "Stockholm was chosen for its strong tech talent pool and favorable business environment."
            }
        },
        {
            entity: "Daniel Ek (pre-Spotify)",
            event_description: "Daniel Ek leaves Stardoll to focus full-time on Spotify.",
            timestamp: "Early 2006",
            page_number: 62,
            supporting_text: "Daniel made the difficult decision to leave his successful role at Stardoll to pursue his music streaming vision.",
            certainty: "certain",
            details: {
                milestone: "Full commitment to Spotify project.",
                relationships: ["Daniel Ek", "Stardoll"],
                relevant_info: "This was a significant risk given Stardoll's success and his secure position there."
            }
        },
        {
            entity: "Spotify",
            event_description: "Ludvig Strigeus begins working on Spotify's user interface.",
            timestamp: "2006",
            page_number: 63,
            supporting_text: "After joining the team, Ludvig focused on creating an intuitive and fast user interface for the music player.",
            certainty: "certain",
            details: {
                milestone: "UI development begins.",
                relationships: ["Ludvig Strigeus"],
                relevant_info: "Ludvig's experience with μTorrent was crucial for the interface design."
            }
        },
        {
            entity: "Spotify",
            event_description: "First internal tests of Spotify's streaming technology.",
            timestamp: "Late 2006",
            page_number: 64,
            supporting_text: "The team conducted the first internal tests of their streaming technology with promising results.",
            certainty: "certain",
            details: {
                milestone: "First successful technology demonstration.",
                relevant_info: "The tests showed that instant streaming was technically feasible."
            }
        },
        {
            entity: "Music Industry",
            event_description: "iTunes reaches 1 billion downloads milestone.",
            timestamp: "2006",
            page_number: 65,
            supporting_text: "Apple's iTunes Store celebrated reaching 1 billion song downloads, showing the potential of digital music sales.",
            certainty: "certain",
            details: {
                metric: "1 billion downloads on iTunes.",
                milestone: "Major milestone for digital music sales.",
                relationships: ["Apple", "iTunes"],
                relevant_info: "This success convinced many that digital distribution was the future of music."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify team grows to over 10 employees.",
            timestamp: "2007",
            page_number: 66,
            supporting_text: "As development accelerated, the Spotify team expanded to include more engineers and business development staff.",
            certainty: "certain",
            details: {
                metric: "Over 10 employees.",
                milestone: "Significant team expansion.",
                relevant_info: "The team included experts in P2P technology, music licensing, and user experience."
            }
        },
        {
            entity: "Spotify",
            event_description: "First licensing deal signed with an independent label.",
            timestamp: "2007",
            page_number: 67,
            supporting_text: "Spotify secured its first licensing agreement with an independent record label, proving the concept could work.",
            certainty: "certain",
            details: {
                milestone: "First licensing breakthrough.",
                relevant_info: "This deal provided a template for future negotiations with larger labels."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's technology achieves sub-second song loading times.",
            timestamp: "2007",
            page_number: 68,
            supporting_text: "The engineering team achieved their goal of making songs start playing in less than one second.",
            certainty: "certain",
            details: {
                metric: "Sub-second loading times.",
                milestone: "Technical breakthrough in streaming speed.",
                relevant_info: "This was revolutionary compared to existing streaming services which could take minutes to buffer."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Major labels begin serious discussions about streaming licenses.",
            timestamp: "2007",
            page_number: 69,
            supporting_text: "Universal, Sony, Warner, and EMI all began formal discussions about licensing their catalogs for streaming.",
            certainty: "certain",
            details: {
                milestone: "Major label engagement with streaming.",
                relationships: ["Universal Music", "Sony Music", "Warner Music", "EMI"],
                relevant_info: "Labels were motivated by declining CD sales and growing piracy concerns."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify closed beta launches with 1,000 users.",
            timestamp: "Early 2007",
            page_number: 70,
            supporting_text: "The first closed beta of Spotify launched with carefully selected 1,000 users to test the service.",
            certainty: "certain",
            details: {
                metric: "1,000 beta users.",
                milestone: "First user testing phase.",
                relevant_info: "Beta users were amazed by the instant playback and extensive catalog."
            }
        },
        {
            entity: "Spotify",
            event_description: "First major bug fixes and performance improvements implemented.",
            timestamp: "2007",
            page_number: 71,
            supporting_text: "Based on beta feedback, the team implemented crucial bug fixes and performance improvements.",
            certainty: "certain",
            details: {
                milestone: "Product refinement based on user feedback.",
                relevant_info: "These improvements were essential for the eventual public launch."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's playlist feature is developed and tested.",
            timestamp: "2007",
            page_number: 72,
            supporting_text: "The team developed the playlist functionality that would become one of Spotify's defining features.",
            certainty: "certain",
            details: {
                milestone: "Core feature development.",
                relevant_info: "Playlists would later become central to Spotify's social and discovery features."
            }
        },
        {
            entity: "Music Industry",
            event_description: "CD sales continue to decline globally.",
            timestamp: "2007",
            page_number: 73,
            supporting_text: "Global CD sales fell by double digits as digital piracy and early legal downloads continued to grow.",
            certainty: "certain",
            details: {
                relevant_info: "This decline made record labels more open to new digital distribution models.",
                metric: "Double-digit decline in CD sales globally."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify receives Series A funding from Northzone.",
            timestamp: "2007",
            page_number: 74,
            supporting_text: "Northzone led Spotify's Series A funding round, providing capital for expansion and licensing deals.",
            certainty: "certain",
            details: {
                milestone: "Major Series A funding round.",
                relationships: ["Spotify", "Northzone", "Pär-Jörgen Pärson"],
                relevant_info: "This funding was crucial for securing major label licensing deals."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify expands beta to 10,000 users.",
            timestamp: "Mid-2007",
            page_number: 75,
            supporting_text: "The beta program expanded to 10,000 users as the service proved stable and popular.",
            certainty: "certain",
            details: {
                metric: "10,000 beta users.",
                milestone: "Significant beta expansion.",
                relevant_info: "Word-of-mouth from beta users created huge demand for invitations."
            }
        },
        {
            entity: "Spotify",
            event_description: "First advertising partnerships established.",
            timestamp: "2007",
            page_number: 76,
            supporting_text: "Spotify began establishing partnerships with advertisers to support the free tier of the service.",
            certainty: "certain",
            details: {
                milestone: "Freemium model development.",
                relevant_info: "Advertising revenue would be crucial for making the free tier economically viable."
            }
        },
        {
            entity: "Music Industry",
            event_description: "The Pirate Bay trial begins in Sweden.",
            timestamp: "2008",
            page_number: 77,
            supporting_text: "The high-profile trial of The Pirate Bay founders began, drawing global attention to music piracy issues.",
            certainty: "certain",
            details: {
                milestone: "Major legal case against piracy.",
                relationships: ["The Pirate Bay", "Swedish Legal System"],
                relevant_info: "This trial highlighted the need for legal alternatives to piracy."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify signs licensing deal with Universal Music Group.",
            timestamp: "2008",
            page_number: 78,
            supporting_text: "Universal Music Group became the first major label to sign a comprehensive licensing deal with Spotify.",
            certainty: "certain",
            details: {
                milestone: "First major label licensing deal.",
                relationships: ["Spotify", "Universal Music Group"],
                relevant_info: "This deal opened the door for negotiations with other major labels."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify signs deals with Sony Music and Warner Music.",
            timestamp: "2008",
            page_number: 79,
            supporting_text: "Following Universal's lead, Sony Music and Warner Music also signed licensing agreements with Spotify.",
            certainty: "certain",
            details: {
                milestone: "Major label licensing breakthrough.",
                relationships: ["Spotify", "Sony Music", "Warner Music"],
                relevant_info: "These deals gave Spotify access to the majority of popular music."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 100,000 beta users.",
            timestamp: "Late 2008",
            page_number: 80,
            supporting_text: "The beta program continued to grow rapidly, reaching 100,000 users before the official launch.",
            certainty: "certain",
            details: {
                metric: "100,000 beta users.",
                milestone: "Massive beta user growth.",
                relevant_info: "User demand far exceeded expectations, creating a waiting list of millions."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's mobile strategy begins development.",
            timestamp: "2008",
            page_number: 81,
            supporting_text: "Recognizing the future importance of mobile, Spotify began developing mobile applications.",
            certainty: "certain",
            details: {
                milestone: "Mobile strategy initiation.",
                relevant_info: "This would prove crucial as smartphones became ubiquitous."
            }
        },
        {
            entity: "Music Industry",
            event_description: "The financial crisis impacts the music industry.",
            timestamp: "2008",
            page_number: 82,
            supporting_text: "The global financial crisis further reduced music sales and made labels more interested in new revenue streams.",
            certainty: "certain",
            details: {
                relevant_info: "The crisis accelerated the industry's willingness to experiment with streaming models.",
                milestone: "Industry crisis creates opportunity for streaming."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins testing premium subscription tiers.",
            timestamp: "2008",
            page_number: 83,
            supporting_text: "The company started testing various premium subscription models to complement advertising revenue.",
            certainty: "certain",
            details: {
                milestone: "Premium model development.",
                relevant_info: "This would become a crucial revenue stream alongside advertising."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify opens UK expansion planning.",
            timestamp: "2008",
            page_number: 84,
            supporting_text: "With Sweden proving successful, Spotify began serious planning for expansion to the UK market.",
            certainty: "certain",
            details: {
                milestone: "International expansion planning.",
                relevant_info: "The UK would be the first major international market for Spotify."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify hiring accelerates with focus on engineering.",
            timestamp: "2008",
            page_number: 85,
            supporting_text: "As the platform scaled, Spotify significantly increased hiring, especially for engineering positions.",
            certainty: "certain",
            details: {
                milestone: "Rapid team scaling.",
                relevant_info: "The team needed to handle massive user growth and international expansion."
            }
        },
        {
            entity: "Music Industry",
            event_description: "EMI becomes the fourth major label to join Spotify.",
            timestamp: "2009",
            page_number: 86,
            supporting_text: "EMI completed the 'big four' major labels by signing a licensing deal with Spotify.",
            certainty: "certain",
            details: {
                milestone: "Complete major label catalog secured.",
                relationships: ["Spotify", "EMI"],
                relevant_info: "Spotify now had access to virtually all mainstream music."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches premium subscriptions publicly.",
            timestamp: "2009",
            page_number: 87,
            supporting_text: "Spotify officially launched its premium subscription service alongside the free tier.",
            certainty: "certain",
            details: {
                milestone: "Freemium model fully operational.",
                metric: "Premium subscriptions launched.",
                relevant_info: "This dual revenue model would become the industry standard."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 1 million users in Europe.",
            timestamp: "2009",
            page_number: 88,
            supporting_text: "The platform achieved the significant milestone of 1 million total users across its European markets.",
            certainty: "certain",
            details: {
                metric: "1 million total users.",
                milestone: "Major user milestone.",
                relevant_info: "This proved streaming could achieve mainstream adoption."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins developing social features.",
            timestamp: "2009",
            page_number: 89,
            supporting_text: "The company started work on social features that would allow users to share music and see what friends were listening to.",
            certainty: "certain",
            details: {
                milestone: "Social features development.",
                relevant_info: "These features would later become central to Spotify's user engagement strategy."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Physical music sales reach historic lows.",
            timestamp: "2009",
            page_number: 90,
            supporting_text: "CD and vinyl sales hit historic lows, making digital distribution more critical than ever.",
            certainty: "certain",
            details: {
                relevant_info: "This shift made streaming services increasingly important to labels.",
                metric: "Historic low physical sales."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify app ecosystem begins with third-party integrations.",
            timestamp: "2009",
            page_number: 91,
            supporting_text: "Spotify started allowing third-party applications to integrate with its platform.",
            certainty: "certain",
            details: {
                milestone: "Platform ecosystem development.",
                relevant_info: "This would expand Spotify's functionality beyond just music playback."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches in France and Spain.",
            timestamp: "2010",
            page_number: 92,
            supporting_text: "Expanding beyond Nordic and UK markets, Spotify entered France and Spain.",
            certainty: "certain",
            details: {
                milestone: "European expansion continues.",
                relevant_info: "Each new market required separate licensing negotiations."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify mobile apps gain popularity.",
            timestamp: "2010",
            page_number: 93,
            supporting_text: "Spotify's mobile applications for iPhone and Android began gaining significant traction.",
            certainty: "certain",
            details: {
                milestone: "Mobile adoption acceleration.",
                relevant_info: "Mobile would soon become the primary way people consumed music."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify Series B funding round completed.",
            timestamp: "2010",
            page_number: 94,
            supporting_text: "Spotify raised a significant Series B funding round to fuel international expansion.",
            certainty: "certain",
            details: {
                milestone: "Major funding round for expansion.",
                relevant_info: "This funding was essential for entering the competitive US market."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Streaming begins to be counted in music charts.",
            timestamp: "2010",
            page_number: 95,
            supporting_text: "Music charts began incorporating streaming data alongside traditional sales figures.",
            certainty: "certain",
            details: {
                milestone: "Streaming gains industry recognition.",
                relevant_info: "This legitimized streaming as a mainstream music consumption method."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces algorithmic music recommendations.",
            timestamp: "2010",
            page_number: 96,
            supporting_text: "The company began using algorithms to recommend music based on user listening patterns.",
            certainty: "certain",
            details: {
                milestone: "AI-powered recommendations launched.",
                relevant_info: "This would become a key differentiator against competitors."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 5 million users globally.",
            timestamp: "2010",
            page_number: 97,
            supporting_text: "The platform achieved 5 million total users across all its markets.",
            certainty: "certain",
            details: {
                metric: "5 million global users.",
                milestone: "Rapid user growth milestone.",
                relevant_info: "Growth was accelerating as word-of-mouth spread."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins US market preparation in earnest.",
            timestamp: "2010",
            page_number: 98,
            supporting_text: "Serious preparation for the crucial US market launch began with licensing negotiations.",
            certainty: "certain",
            details: {
                milestone: "US market entry preparation.",
                relevant_info: "The US market would be Spotify's biggest challenge and opportunity."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Apple launches iTunes in the Cloud.",
            timestamp: "2011",
            page_number: 99,
            supporting_text: "Apple introduced cloud-based music storage, moving closer to a streaming model.",
            certainty: "certain",
            details: {
                milestone: "Apple enters cloud music space.",
                relationships: ["Apple", "iTunes"],
                relevant_info: "This showed even Apple was moving away from pure download sales."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify officially launches in the Netherlands and Belgium.",
            timestamp: "2011",
            page_number: 100,
            supporting_text: "Spotify expanded into the Benelux region with launches in the Netherlands and Belgium.",
            certainty: "certain",
            details: {
                milestone: "Benelux market entry.",
                relevant_info: "These markets provided additional revenue before the US launch."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 10 million users globally.",
            timestamp: "2011",
            page_number: 101,
            supporting_text: "The platform doubled its user base, reaching 10 million users worldwide.",
            certainty: "certain",
            details: {
                metric: "10 million global users.",
                milestone: "Major user growth milestone.",
                relevant_info: "This demonstrated the universal appeal of streaming music."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify premium subscriptions exceed 1 million globally.",
            timestamp: "2011",
            page_number: 102,
            supporting_text: "Premium subscriptions crossed the 1 million threshold, proving users would pay for enhanced features.",
            certainty: "certain",
            details: {
                metric: "1 million premium subscribers.",
                milestone: "Subscription model validation.",
                relevant_info: "This proved the freemium model could drive significant revenue."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Google launches Google Music.",
            timestamp: "2011",
            page_number: 103,
            supporting_text: "Google entered the digital music space with Google Music, adding to competitive pressure.",
            certainty: "certain",
            details: {
                milestone: "Major tech company enters music streaming.",
                relationships: ["Google", "Google Music"],
                relevant_info: "This increased competition in the streaming space."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's first data-driven playlist curation begins.",
            timestamp: "2011",
            page_number: 104,
            supporting_text: "The company began using data analytics to create curated playlists for different moods and activities.",
            certainty: "certain",
            details: {
                milestone: "Data-driven content curation.",
                relevant_info: "This would evolve into Spotify's famous playlist culture."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify establishes US headquarters in New York.",
            timestamp: "2011",
            page_number: 105,
            supporting_text: "In preparation for the US launch, Spotify established its American headquarters in New York City.",
            certainty: "certain",
            details: {
                milestone: "US operations establishment.",
                relevant_info: "New York was chosen for its proximity to music industry executives."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify unlimited free tier ends, introduces time limits.",
            timestamp: "2011",
            page_number: 106,
            supporting_text: "To improve economics, Spotify introduced listening time limits for free users.",
            certainty: "certain",
            details: {
                milestone: "Freemium model adjustment.",
                relevant_info: "This pushed more users toward premium subscriptions."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify Connect feature development begins.",
            timestamp: "2012",
            page_number: 107,
            supporting_text: "Development began on Spotify Connect, allowing users to control music across multiple devices.",
            certainty: "certain",
            details: {
                milestone: "Multi-device functionality development.",
                relevant_info: "This would become a key differentiator in the smart home era."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Pandora goes public.",
            timestamp: "2011",
            page_number: 108,
            supporting_text: "Internet radio service Pandora went public, showing investor interest in music streaming.",
            certainty: "certain",
            details: {
                milestone: "First major streaming IPO.",
                relationships: ["Pandora"],
                relevant_info: "This validated the streaming music market for investors."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify Series C funding raises $100 million.",
            timestamp: "2012",
            page_number: 109,
            supporting_text: "Spotify raised $100 million in Series C funding to accelerate global expansion.",
            certainty: "certain",
            details: {
                metric: "$100 million Series C funding.",
                milestone: "Major funding milestone.",
                relevant_info: "This funding valued Spotify at over $3 billion."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches in Germany and Austria.",
            timestamp: "2012",
            page_number: 110,
            supporting_text: "Spotify expanded into the crucial German-speaking markets of Germany and Austria.",
            certainty: "certain",
            details: {
                milestone: "German market entry.",
                relevant_info: "Germany was Europe's largest music market."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces Apps platform.",
            timestamp: "2012",
            page_number: 111,
            supporting_text: "Spotify launched its Apps platform, allowing third-party developers to create Spotify integrations.",
            certainty: "certain",
            details: {
                milestone: "Platform ecosystem expansion.",
                relevant_info: "This transformed Spotify from a music player into a platform."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Apple launches iTunes Match.",
            timestamp: "2011",
            page_number: 112,
            supporting_text: "Apple introduced iTunes Match, a cloud music service that stored users' personal music collections.",
            certainty: "certain",
            details: {
                milestone: "Apple's cloud music service.",
                relationships: ["Apple", "iTunes"],
                relevant_info: "This was Apple's response to growing streaming competition."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 20 million users globally.",
            timestamp: "2012",
            page_number: 113,
            supporting_text: "Spotify doubled its user base again, reaching 20 million users worldwide.",
            certainty: "certain",
            details: {
                metric: "20 million global users.",
                milestone: "Accelerating user growth.",
                relevant_info: "Growth was exponential as streaming gained mainstream acceptance."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify premium subscribers reach 3 million.",
            timestamp: "2012",
            page_number: 114,
            supporting_text: "Premium subscriptions tripled to 3 million, showing strong conversion from free users.",
            certainty: "certain",
            details: {
                metric: "3 million premium subscribers.",
                milestone: "Premium growth acceleration.",
                relevant_info: "The freemium model was proving highly effective."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Amazon launches Amazon Music.",
            timestamp: "2012",
            page_number: 115,
            supporting_text: "Amazon entered the music streaming space with Amazon Music, increasing competition.",
            certainty: "certain",
            details: {
                milestone: "Amazon enters streaming market.",
                relationships: ["Amazon", "Amazon Music"],
                relevant_info: "Another tech giant recognized streaming's potential."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins developing Discover Weekly algorithm.",
            timestamp: "2012",
            page_number: 116,
            supporting_text: "Early development began on what would become Discover Weekly, Spotify's personalized recommendation playlist.",
            certainty: "certain",
            details: {
                milestone: "Advanced recommendation system development.",
                relevant_info: "This would become one of Spotify's most popular features."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches in Australia and New Zealand.",
            timestamp: "2012",
            page_number: 117,
            supporting_text: "Spotify expanded to Australia and New Zealand, its first major expansion outside Europe and North America.",
            certainty: "certain",
            details: {
                milestone: "Asia-Pacific market entry.",
                relevant_info: "This demonstrated Spotify's global ambitions."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's first major playlist promotion campaigns begin.",
            timestamp: "2012",
            page_number: 118,
            supporting_text: "Spotify began actively promoting its playlists as a way to discover new music.",
            certainty: "certain",
            details: {
                milestone: "Playlist-centric marketing begins.",
                relevant_info: "This would become central to Spotify's value proposition."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Rdio launches as Spotify competitor.",
            timestamp: "2012",
            page_number: 119,
            supporting_text: "Rdio, founded by Skype creators, launched as a direct competitor to Spotify with similar features.",
            certainty: "certain",
            details: {
                milestone: "Major new streaming competitor.",
                relationships: ["Rdio", "Niklas Zennström"],
                relevant_info: "Competition was intensifying in the streaming space."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins testing video content.",
            timestamp: "2013",
            page_number: 120,
            supporting_text: "Spotify started experimenting with video content, including music videos and video podcasts.",
            certainty: "certain",
            details: {
                milestone: "Multi-media content exploration.",
                relevant_info: "This was an early attempt to expand beyond pure audio."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 24 million active users globally.",
            timestamp: "2013",
            page_number: 121,
            supporting_text: "Spotify's user base continued to grow rapidly, reaching 24 million active users.",
            certainty: "certain",
            details: {
                metric: "24 million active users.",
                milestone: "Sustained rapid growth.",
                relevant_info: "Spotify was becoming the clear leader in music streaming."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify premium subscribers reach 6 million.",
            timestamp: "2013",
            page_number: 122,
            supporting_text: "Premium subscriptions doubled again to 6 million, showing strong monetization.",
            certainty: "certain",
            details: {
                metric: "6 million premium subscribers.",
                milestone: "Premium subscriber doubling.",
                relevant_info: "Revenue growth was keeping pace with user growth."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Apple acquires Beats Electronics for $3 billion.",
            timestamp: "2014",
            page_number: 123,
            supporting_text: "Apple made its largest acquisition ever, buying Beats Electronics and its streaming service.",
            certainty: "certain",
            details: {
                metric: "$3 billion acquisition.",
                milestone: "Apple's major streaming play.",
                relationships: ["Apple", "Beats", "Dr. Dre", "Jimmy Iovine"],
                relevant_info: "This signaled Apple's serious commitment to streaming music."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches in Latin America.",
            timestamp: "2013",
            page_number: 124,
            supporting_text: "Spotify expanded into Latin American markets, including Brazil, Mexico, and Argentina.",
            certainty: "certain",
            details: {
                milestone: "Latin American expansion.",
                relevant_info: "This represented significant growth potential in emerging markets."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces Running feature with tempo matching.",
            timestamp: "2014",
            page_number: 125,
            supporting_text: "Spotify launched Running, which detected users' running pace and matched music tempo accordingly.",
            certainty: "certain",
            details: {
                milestone: "Innovative fitness integration.",
                relevant_info: "This showcased Spotify's ability to innovate beyond basic streaming."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 50 million active users globally.",
            timestamp: "2014",
            page_number: 126,
            supporting_text: "Spotify achieved the major milestone of 50 million active users worldwide.",
            certainty: "certain",
            details: {
                metric: "50 million active users.",
                milestone: "Major user milestone.",
                relevant_info: "Spotify was approaching mainstream adoption levels."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify Connect officially launches.",
            timestamp: "2014",
            page_number: 127,
            supporting_text: "Spotify Connect was officially launched, allowing seamless music control across devices.",
            certainty: "certain",
            details: {
                milestone: "Multi-device experience launched.",
                relevant_info: "This became essential as smart speakers and IoT devices proliferated."
            }
        },
        {
            entity: "Music Industry",
            event_description: "YouTube launches YouTube Music Key.",
            timestamp: "2014",
            page_number: 128,
            supporting_text: "Google's YouTube launched Music Key, a premium music streaming service.",
            certainty: "certain",
            details: {
                milestone: "YouTube enters music streaming.",
                relationships: ["YouTube", "Google"],
                relevant_info: "This leveraged YouTube's massive music video catalog."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify acquires The Echo Nest for music intelligence.",
            timestamp: "2014",
            page_number: 129,
            supporting_text: "Spotify acquired The Echo Nest, a music intelligence company, to improve recommendations.",
            certainty: "certain",
            details: {
                milestone: "Major acquisition for AI capabilities.",
                relationships: ["Spotify", "The Echo Nest"],
                relevant_info: "This dramatically improved Spotify's recommendation algorithms."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify Family plans introduced.",
            timestamp: "2014",
            page_number: 130,
            supporting_text: "Spotify introduced Family plans, allowing multiple family members to share a subscription.",
            certainty: "certain",
            details: {
                milestone: "Family subscription model launched.",
                relevant_info: "This reduced per-user costs and increased household penetration."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify's annual Wrapped feature debuts.",
            timestamp: "2014",
            page_number: 131,
            supporting_text: "Spotify introduced its annual Wrapped feature, showing users their year-end listening statistics.",
            certainty: "certain",
            details: {
                milestone: "Data-driven user engagement feature.",
                relevant_info: "Wrapped would become a viral marketing phenomenon."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Tidal launches with high-fidelity streaming.",
            timestamp: "2014",
            page_number: 132,
            supporting_text: "Tidal launched as a high-fidelity streaming service targeting audiophiles.",
            certainty: "certain",
            details: {
                milestone: "High-quality streaming competitor.",
                relationships: ["Tidal"],
                relevant_info: "This created a new premium tier in streaming quality."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches Discover Weekly.",
            timestamp: "2015",
            page_number: 133,
            supporting_text: "Spotify launched Discover Weekly, a personalized playlist updated every Monday.",
            certainty: "certain",
            details: {
                milestone: "Revolutionary recommendation feature.",
                relevant_info: "Discover Weekly became hugely popular and widely copied."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Apple Music launches with 30 million songs.",
            timestamp: "June 2015",
            page_number: 134,
            supporting_text: "Apple officially launched Apple Music with a catalog of 30 million songs.",
            certainty: "certain",
            details: {
                metric: "30 million songs at launch.",
                milestone: "Apple's streaming service launch.",
                relationships: ["Apple", "Apple Music"],
                relevant_info: "This was Apple's direct challenge to Spotify's dominance."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 75 million active users.",
            timestamp: "2015",
            page_number: 135,
            supporting_text: "Spotify continued its rapid growth, reaching 75 million active users globally.",
            certainty: "certain",
            details: {
                metric: "75 million active users.",
                milestone: "Continued rapid user growth.",
                relevant_info: "Spotify maintained its lead despite increased competition."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify Video launches with original content.",
            timestamp: "2015",
            page_number: 136,
            supporting_text: "Spotify launched Spotify Video with original video content and podcasts.",
            certainty: "certain",
            details: {
                milestone: "Video content platform launch.",
                relevant_info: "This was an early move into podcasting and video content."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 20 million premium subscribers.",
            timestamp: "2015",
            page_number: 137,
            supporting_text: "Spotify achieved 20 million premium subscribers, tripling from the previous year.",
            certainty: "certain",
            details: {
                metric: "20 million premium subscribers.",
                milestone: "Major subscription milestone.",
                relevant_info: "Premium growth was accelerating faster than total user growth."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins serious podcast investment.",
            timestamp: "2015",
            page_number: 138,
            supporting_text: "Spotify began investing seriously in podcast content and technology.",
            certainty: "certain",
            details: {
                milestone: "Podcast strategy development.",
                relevant_info: "This would become a major strategic focus in later years."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Jay-Z acquires Tidal for $56 million.",
            timestamp: "2015",
            page_number: 139,
            supporting_text: "Jay-Z acquired Tidal for $56 million and relaunched it with artist ownership focus.",
            certainty: "certain",
            details: {
                metric: "$56 million acquisition.",
                milestone: "Artist-owned streaming service.",
                relationships: ["Jay-Z", "Tidal"],
                relevant_info: "This created a new model of artist-controlled distribution."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches Release Radar.",
            timestamp: "2016",
            page_number: 140,
            supporting_text: "Spotify introduced Release Radar, a personalized playlist of new releases from artists users follow.",
            certainty: "certain",
            details: {
                milestone: "New release discovery feature.",
                relevant_info: "This helped users discover new music from their favorite artists."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 100 million active users.",
            timestamp: "2016",
            page_number: 141,
            supporting_text: "Spotify achieved the major milestone of 100 million active users worldwide.",
            certainty: "certain",
            details: {
                metric: "100 million active users.",
                milestone: "Major user milestone.",
                relevant_info: "Spotify had become a truly mainstream platform."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify Student discount launched globally.",
            timestamp: "2016",
            page_number: 142,
            supporting_text: "Spotify introduced student pricing at 50% discount to capture the young adult market.",
            certainty: "certain",
            details: {
                milestone: "Student market targeting.",
                metric: "50% discount for students.",
                relevant_info: "This helped build loyalty among future premium subscribers."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify launches in Japan.",
            timestamp: "2016",
            page_number: 143,
            supporting_text: "Spotify finally launched in Japan, one of the world's largest music markets.",
            certainty: "certain",
            details: {
                milestone: "Japanese market entry.",
                relevant_info: "Japan was crucial for achieving truly global scale."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 40 million premium subscribers.",
            timestamp: "2016",
            page_number: 144,
            supporting_text: "Spotify doubled its premium subscriber base to 40 million, showing strong monetization.",
            certainty: "certain",
            details: {
                metric: "40 million premium subscribers.",
                milestone: "Premium subscriber doubling.",
                relevant_info: "Spotify's conversion rate from free to premium was improving."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify begins testing AI-powered DJ feature.",
            timestamp: "2017",
            page_number: 145,
            supporting_text: "Spotify started experimenting with AI-powered DJ features that could create seamless music transitions.",
            certainty: "certain",
            details: {
                milestone: "AI DJ technology development.",
                relevant_info: "This would evolve into advanced playlist creation and music mixing features."
            }
        },
        {
            entity: "Music Industry",
            event_description: "Streaming becomes the dominant music consumption format globally.",
            timestamp: "2017",
            page_number: 146,
            supporting_text: "For the first time, streaming revenue exceeded physical sales and digital downloads combined.",
            certainty: "certain",
            details: {
                milestone: "Streaming becomes dominant music format.",
                relevant_info: "This validated Spotify's vision of music streaming as the future of the industry."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify introduces Spotify Codes for easy playlist sharing.",
            timestamp: "2017",
            page_number: 147,
            supporting_text: "Spotify launched Spotify Codes, QR-code-like images that made sharing playlists and songs easier.",
            certainty: "certain",
            details: {
                milestone: "Social sharing innovation.",
                relevant_info: "This simplified the process of sharing music recommendations."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches 140 million active users globally.",
            timestamp: "2017",
            page_number: 148,
            supporting_text: "Spotify continued its rapid growth trajectory, reaching 140 million active users worldwide.",
            certainty: "certain",
            details: {
                metric: "140 million active users.",
                milestone: "Continued user growth acceleration.",
                relevant_info: "Spotify maintained its position as the world's leading music streaming platform."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify Premium Duo subscription tier introduced.",
            timestamp: "2020",
            page_number: 149,
            supporting_text: "Spotify introduced Premium Duo, a subscription plan designed for couples living together.",
            certainty: "certain",
            details: {
                milestone: "New subscription tier for couples.",
                relevant_info: "This filled the gap between individual and family subscriptions."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify Car Thing device launched.",
            timestamp: "2021",
            page_number: 150,
            supporting_text: "Spotify launched Car Thing, a dedicated in-car device for accessing Spotify while driving.",
            certainty: "certain",
            details: {
                milestone: "First Spotify hardware product.",
                relevant_info: "This represented Spotify's first foray into hardware manufacturing."
            }
        },
        {
            entity: "Spotify",
            event_description: "Spotify reaches over 400 million total users globally.",
            timestamp: "2022",
            page_number: 151,
            supporting_text: "Spotify achieved the milestone of over 400 million total users across free and premium tiers.",
            certainty: "certain",
            details: {
                metric: "400+ million total users.",
                milestone: "Major global user milestone.",
                relevant_info: "Spotify had become one of the world's largest audio platforms."
            }
        }
    ]
};

console.log('Timeline data loaded successfully:', window.timelineData.timeline_events.length, 'events');