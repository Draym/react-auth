import {Component} from "react";

type MainLoadingProperties = {}

type MainLoadingState = {}

export default class MainLoading extends Component<MainLoadingProperties, MainLoadingState> {

    render() {
        return <div className="animated fadeIn pt-1 text-center">Loading...</div>
    }
}