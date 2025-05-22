import { useMediaQuery } from 'react-responsive'
import React from "react";

const SmallCards = ({
    imgSrc,
    datePush,
    titleNews,
    textNews,
    newsLink,
}) => {
    return (
        <div className="smallCardNews">
            <img src={imgSrc} className="imgInSmallCard"/>
            <div >
                <h3 className="dateOfpushSmallNews">{datePush}</h3>
                <h1 className="smallCardTitleNews">{titleNews}</h1>
                <div className="smallTextNews-container">
                    <p className="smallTextNews">{textNews}</p>
                </div>
                <a href="#" className="smallNewsLink">{newsLink}</a>
            </div>
        </div>
    );
};

const smallCardsData = [
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgOne.png',
        datePush: '4 days ago',
        titleNews: 'SMITE 2 beginners guide: Tips for understanding gods, roles, and teamwork',
        textNews: 'Learn how to pick the right god, master roles, and play as a team in this fast-paced MOBA, whether youre new to SMITE or new to the genre.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgTwo.png',
        datePush: '1 days ago',
        titleNews: 'SMITE 2 beginners guide: Tips for understanding gods, roles, and teamwork',
        textNews: 'Learn how to pick the right god, master roles, and play as a team in this fast-paced MOBA, whether youre new to SMITE or new to the genre.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgThree.png',
        datePush: '20 days ago',
        titleNews: 'SMITE 2 beginners guide: Tips for understanding gods, roles, and teamwork',
        textNews: 'Learn how to pick the right god, master roles, and play as a team in this fast-paced MOBA, whether youre new to SMITE or new to the genre.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgFour.png',
        datePush: '14 days ago',
        titleNews: 'SMITE 2 beginners guide: Tips for understanding gods, roles, and teamwork',
        textNews: 'Learn how to pick the right god, master roles, and play as a team in this fast-paced MOBA, whether youre new to SMITE or new to the genre.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgFive.png',
        datePush: '4 days ago',
        titleNews: 'SMITE 2 beginners guide: Tips for understanding gods, roles, and teamwork',
        textNews: 'Learn how to pick the right god, master roles, and play as a team in this fast-paced MOBA, whether youre new to SMITE or new to the genre.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgSix.png',
        datePush: '6 days ago',
        titleNews: 'SMITE 2 beginners guide: Tips for understanding gods, roles, and teamwork',
        textNews: 'Learn how to pick the right god, master roles, and play as a team in this fast-paced MOBA, whether youre new to SMITE or new to the genre.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgSeven.png',
        datePush: '11 days ago',
        titleNews: 'SMITE 2 beginners guide: Tips for understanding gods, roles, and teamwork',
        textNews: 'Learn how to pick the right god, master roles, and play as a team in this fast-paced MOBA, whether youre new to SMITE or new to the genre.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgEight.png',
        datePush: '2 days ago',
        titleNews: 'SMITE 2 beginners guide: Tips for understanding gods, roles, and teamwork',
        textNews: 'Learn how to pick the right god, master roles, and play as a team in this fast-paced MOBA, whether youre new to SMITE or new to the genre.',
        newsLink: 'Read More',
    },
]

export function SmallNews() {
    const isMobile = useMediaQuery({ maxWidth: 440 });

    const mobileOrder = [0, 5, 2, 3, 6, 7, 2]; 
    const desktopGroups = [
        [0, 1],
        [2, 3],
        [4, 5],
        [6, 7],
    ];

    if (isMobile) {
        return (
            <div>
                <section className="sectionForSmallNewsCards">
                    {mobileOrder.map((index, idx) => (
                        <React.Fragment key={idx}>
                            <SmallCards {...smallCardsData[index]} />
                            <hr className="hr" />
                        </React.Fragment>
                    ))}
                </section>
            </div>
        );
    }

    return (
        <div>
            <section className="sectionForSmallNewsCards">
                {desktopGroups.map((group, groupIdx) => (
                    <React.Fragment key={groupIdx}>
                        <hr className="hr" />
                        <div className="smallCardsBlockTwo">
                            {group.map((index, idx) => (
                                <SmallCards key={idx} {...smallCardsData[index]} />
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
}
