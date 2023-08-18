import React from 'react';
import { Appbar } from 'react-native-paper';

const HeaderComponent = () => {

    return (
        <Appbar.Header mode={'center-aligned'} style={{backgroundColor: "green"}} >
            <Appbar.Content title="ItinHoraire" color={"white"} />
        </Appbar.Header>
    );
};

export default HeaderComponent;