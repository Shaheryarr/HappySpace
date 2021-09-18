import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';

const SelectWorkspace = ({ route }) => {

    const { params } = route;

    const [workspaces, setWorkspaces] = useState(params.workspaces || []);

    return (
        <SafeAreaView>
            <Text>Select Workspace</Text>
        </SafeAreaView>
    )
}

export default SelectWorkspace;