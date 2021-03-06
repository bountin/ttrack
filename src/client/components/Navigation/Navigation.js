'use strict';

import React from 'react';

import ProfileWidget from './ProfileWidget';
import Motto from '../Motto';

import styles from './less/Navigation.less';

export default React.createClass({
    propTypes: {
        activeUser: React.PropTypes.object.isRequired,
        motto: React.PropTypes.object.isRequired,
        onLogout: React.PropTypes.func.isRequired
    },
    logoutUser: function() {
        this.props.onLogout();
    },
    render: function() {
        let motto = this.props.motto;

        return (
            <nav className={"navbar navbar-inverse navbar-fixed-top " + styles.navbar} role="navigation">
                <div className={'container-fluid ' + styles.container}>
                    <div className={'navbar-header ' + styles.header}>
                        <a className={'navbar-brand ' + styles.brand} href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" space="preserve">
                                <path d="M 100.00,0.00
                               C 100.00,0.00 100.00,20.00 100.00,20.00
                                 100.00,20.00 80.00,20.00 80.00,20.00
                                 80.00,20.00 80.00,100.00 80.00,100.00
                                 80.00,100.00 60.00,100.00 60.00,100.00
                                 60.00,100.00 60.00,20.00 60.00,20.00
                                 60.00,20.00 40.00,20.00 40.00,20.00
                                 40.00,20.00 40.00,100.00 40.00,100.00
                                 40.00,100.00 20.00,100.00 20.00,100.00
                                 20.00,100.00 20.00,20.00 20.00,20.00
                                 20.00,20.00 0.00,20.00 0.00,20.00
                                 0.00,20.00 0.00,0.00 0.00,0.00
                                 0.00,0.00 100.00,0.00 100.00,0.00 Z" />
                            </svg>
                            <span className={"title " + styles.title}>
                                <strong>Time</strong> Tracking
                            </span>

                            <small className={styles['tt-motto']}><Motto house={motto.house} motto={motto.motto}/></small>
                        </a>
                    </div>

                    <ProfileWidget activeUser={this.props.activeUser}/>

                    <div className={"navbar-container " + styles['navbar-container']}>
                        <ul className={"nav navbar-nav " + styles['navbar-nav']}>
                            <li className={"active " + styles.active}>
                                <a>
                                    <i className="fa fa-calendar"></i>
                                    <span>Monatsansicht</span>
                                </a>
                            </li>
                            <li className={"logout " + styles.logout}>
                                <a onClick={this.logoutUser}>
                                    <i className="fa fa-power-off"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
});


