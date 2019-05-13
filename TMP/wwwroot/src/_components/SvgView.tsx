import * as React from 'react';

import { connect } from 'react-redux';

import { Button, Container, Grid, Menu, Icon, Sidebar, Segment, Header, Dropdown, GridColumn, MenuItem, GridRow, Ref, Placeholder, Rail, Sticky } from "semantic-ui-react";
import ColorList from './ColorList';
import SelectedColor from './SelectedColor';
import ColorButton from './ColorButton';
import _ from 'lodash'

class SvgView extends React.Component {
    contextRef = React.createRef();
    render() {
        return (
            <div>
                <Menu fixed="top">
                    <Menu.Item>
                        <Icon name="braille"></Icon>
                    </Menu.Item>
                    <Menu.Item>
                        <Header>Easy QC</Header>
                    </Menu.Item>
                </Menu>
                <Grid centered className="qc-app-content">
                    <Grid.Column width={1}>
                        <Menu vertical icon >
                            <Menu.Item >
                                <Icon name="upload"></Icon>
                            </Menu.Item>
                            <Menu.Item>
                                <Icon name="edit"></Icon>
                            </Menu.Item>
                            <Menu.Item>
                                <Icon name="tasks"></Icon>
                            </Menu.Item>
                            <Menu.Item>
                                <Icon name="save"></Icon>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12} className="qc-part-view">
                        <Segment>
                            <Header>
                                App Content
                            </Header>
                        </Segment>
                    </Grid.Column>

                </Grid>
            </div>

        );

    }

};

export default connect()(SvgView);