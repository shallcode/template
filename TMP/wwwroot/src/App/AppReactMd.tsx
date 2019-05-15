import * as React from 'react';

import { connect } from 'react-redux';
import { Toolbar, Button, Grid, Cell, Drawer, NavigationDrawer, DialogContainer, ListItem, FontIcon } from 'react-md';
import { IAppState } from '../_helpers/store';
import { DrawerThunkDispatch, toggleDrawer } from '../_actions/DrawerActions';
import { IDrawerState } from '../_reducers/DrawerReducer';

interface NavLinkProps {
    label: string;
    to: string;
    icon: string;
}

const NavLink = (props: NavLinkProps) => (<ListItem
    active={true}
    key={props.label}
    primaryText={props.label}
/>);


const navItems = [{
    label: 'Home',
    to: '/',
    icon: 'home',
}, {
    label: 'Page 1',
    to: '/page-1',
    icon: 'bookmark',
}, {
    label: 'Page 2',
    to: '/page-2',
    icon: 'donut_large',
}, {
    label: 'Page 3',
    to: '/page-3',
    icon: 'flight_land',
}].map((props) => { return (<NavLink icon={props.icon} label={props.label} to={props.to} key={props.label} />) });

interface AppProps extends IDrawerState {
    handleDrawerToggle: () => Promise<any>;
}

class AppReactMd extends React.Component<AppProps> {
    ref = React.createRef();
    render() {
        const { drawerVisible, handleDrawerToggle } = this.props;
        return (
            <>
                <Toolbar
                    id="fixed-toolbar-example"
                    fixed
                    colored
                    nav={(
                        <Button key="nav" icon onClick={handleDrawerToggle}>menu</Button>
                    )}
                    actions={(
                        <Button key="action" icon >search</Button>
                    )}
                    title="Title"
                />

                <Drawer
                    id="simple-drawer-example"
                    className="md-toolbar-relative"
                    visible={drawerVisible}
                    onVisibilityChange={(visible) => { console.log(visible); }}
                    onMediaTypeChange={(type) => { console.log(type); }}
                    position='left'
                    navItems={navItems}
                >
                </Drawer>
                <Grid className={drawerVisible ? 'md-toolbar-relative qc-pusher' : 'md-toolbar-relative qc-pusher transition'}>Test</Grid>



            </>
        );
    }

};

const mapStateToProps = (state: IAppState) => state.drawer;

const mapDispatchToProps = (dispatch: DrawerThunkDispatch) => ({
    handleDrawerToggle: () => dispatch(toggleDrawer()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppReactMd);