import React, { useState } from "react";
import './profileUser.css'
import NavProfile from "./NavProfile";
import RouterBody from "./BodyProfile/routersBody";
export default function ProfileUser({ }) {
    return (
        <>
            <div class="container_wrapper profile_page">
                <div class="row">
                    <NavProfile />
                    <div className="col-md-10">

                        <RouterBody />
                    </div>
                </div>
            </div >
        </>
    )
}
