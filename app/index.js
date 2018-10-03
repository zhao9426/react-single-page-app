import  React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './Root';
import createHistory from 'history/createBrowserHistory';
const root2 = document.querySelector("#root");
const history=createHistory();

ReactDOM.render(
    <AppContainer>
        <Root history={history}/>
    </AppContainer>,
        root2
);

if(module.hot){
    module.hot.accept('./Root',()=>{
        const NewRoot=require('./Root').default;
        ReactDOM.render(
            <AppContainer>
                <NewRoot history={history}/>
            </AppContainer>,
             root2
        )
    })
}
