import React from 'react';

const tweetList = ({userTweetList = []}) => {
    return (
        <>
            {
                userTweetList.map(({data, index}) => {
                    if (data) {
                        return (
                            <div key={ data.name }>
                                <h1>
                                    {
                                        data.name
                                    }
                                </h1>
                            </div>
                        )
                    }
                    return null;
                })
            }
        </>
    )
}

export default tweetList;
