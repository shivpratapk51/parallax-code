import {TextAttributes } from "@opentui/core";

export function Header() {
    return (
        <box justifyContent="center" alignItems="center">
            <box flexDirection="row" justifyContent="center" gap={0.5} alignItems="center">
                <ascii-font font="tiny" text="PI" color={"#4dff4d"}/>
                <ascii-font font="tiny" text="Code"/>
            </box>
            
        </box>
    )
}