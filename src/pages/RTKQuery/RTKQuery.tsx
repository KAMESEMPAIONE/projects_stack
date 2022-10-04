import React, { FC, useState } from "react";
import { useGetPostsQuery } from "../../app/Reducer/PostApi";
import './RTKQuery.scss';

export const RTKQuery: FC = () => {
    const {data = [], isLoading, isSuccess} = useGetPostsQuery(30);

    return (
        <section className="RTKQuery">
            <h2 className="Projects__title">RTK Query</h2>

                <div className="RTKQuery__content">
                    {isLoading &&
                        <div className="RTKQuery__loading">Loading!!!</div>
                    }

                    <div className="RTKQuery__body">
                        {isSuccess &&
                            <div className="RTKQuery__inside">

                                {data.map((post) => {
                                    return (
                                        <div className="RTKQuery__item" key={post.id}>
                                            <span>{post.id}</span> {post.title}
                                        </div>
                                    )
                                })}
                                
                            </div>
                        }
                    </div>
                </div>
        </section>
    )
}