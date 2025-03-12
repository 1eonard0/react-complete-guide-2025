// eslint-disable-next-line no-unused-vars
export default function Tabs({ children, buttons, ButtonsContainerTag = 'menu'}) {
    //const ButtonsContainerTag = buttonsContainerTag;
    return (
        <>
            <ButtonsContainerTag>
                {buttons}
            </ButtonsContainerTag>
            {children}
        </>
    );
}