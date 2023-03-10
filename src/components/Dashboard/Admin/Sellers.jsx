import React from 'react';

const Sellers = () => {
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>01</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>Purple</td>
                            <th><button className="btn btn-ghost btn-xs">verify</button></th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Sellers;
