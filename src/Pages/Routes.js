import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home'
import Browser from './Category'
import Search from './Search'
import Desc from './Desc'
import Borrow from './Borrow'
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';
import Books from './Book';
import AddBooks from './AddBook';
import Deadlines from './Deadline';
import WaitingBorrows from './WaitingBorrow';
import WaitingConfirmations from './WaitingConfirmation';
import Confirmations from './Confirmation';
export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/Category" component={Browser} />
            <Route path="/Search" component={Search} />
            <Route path="/Desc" component={Desc} />
            <Route path="/Borrow" component={Borrow} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Book" component={Books} />
            <Route path="/AddBook" component={AddBooks} />
            <Route path="/Deadline" component={Deadlines} />
            <Route path="/WaitingBorrow" component={WaitingBorrows} />
            <Route path="/Waiting" component={WaitingConfirmations} />
            <Route path="/Confirmation" component={Confirmations} />
        </BrowserRouter>
    )
}