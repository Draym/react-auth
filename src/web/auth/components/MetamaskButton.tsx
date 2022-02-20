import {Component} from "react";
import {Button, Image} from "react-bootstrap";
import {IconImg} from "../../../resources/images";

import './MetamaskButton.scss';
import Web3SDK from "../../../blockchain/Web3SDK";

interface MetamaskButtonProperties {
    text: string,
    callback: () => void
}

type MetamaskButtonState = {}

export default class MetamaskButton extends Component<MetamaskButtonProperties, MetamaskButtonState> {
    constructor(props: MetamaskButtonProperties) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    async onClick(e: any) {
        const walletConnected = await Web3SDK.isMetamaskConnected()
        if (walletConnected) {
            Web3SDK.loadMetamask().then(() => {
                this.props.callback()
            })
        }
    }

    render() {
        return <Button className="metamask-btn" onClick={this.onClick}><Image className="metamask-icon" src={IconImg.METAMASK}/>
            <span className="metamask-btn-text">{this.props.text}</span>
        </Button>
    }
}