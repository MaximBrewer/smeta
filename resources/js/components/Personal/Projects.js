import React, { useState, useEffect } from 'react';
import axios from "axios";
import clsx from 'clsx';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container, Badge, IconButton, Divider, Typography, List, Toolbar, AppBar, Box, Drawer, CssBaseline } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import Rating from '@material-ui/lab/Rating';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {
    Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    table: {
    }
}));


export default function Projects() {

    const [state, setState] = React.useState({
        columns: [
            { title: window.__('Title'), field: 'title', render: rowData => <Link to={`/personal/projects/${rowData.id}`}>{rowData.title}</Link> },
        ],
        data: [],
    });

    useEffect(() => {
        axios
            .get(
                "/api/v1/projects?csrf_token=" +
                window.csrf_token +
                "&api_token=" +
                window.api_token
            )
            .then(res => {
                setState(prevState => {
                    const data = res.data.data;
                    return { ...prevState, data };
                });
            })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.errors) { }
            });
    }, []);

    const classes = useStyles();

    return (
        <MaterialTable
            title={window.__('Projects')}
            columns={state.columns}
            data={state.data}
            className={classes.table}
            localization={{
                pagination: {
                    labelDisplayedRows: '{from}-{to} ' + window.__("of") + ' {count}',
                    labelRowsSelect: window.__("rows")
                },
                toolbar: {
                    nRowsSelected: '{0} ' + window.__("row(s)") + ' selected',
                    searchTooltip: window.__('Search'),
                    searchPlaceholder: window.__('Search')
                },
                header: {
                    actions: window.__('Actions')
                },
                body: {
                    emptyDataSourceMessage: window.__('No records to display'),
                    filterRow: {
                        filterTooltip: window.__('Filter')
                    },
                    editRow: {
                        deleteText: window.__('Are you sure you want to delete project?')
                    }
                }
            }}


//             body
// object
// {}
// Key value pair for localize body component
// body.emptyDataSourceMessage
// string
// No records to display
// body.addTooltip
// string
// Add
// body.deleteTooltip
// string
// Delete
// body.editTooltip
// string
// Edit
// body.filterRow
// object
// {}
// Key value pair for localize filter row component
// body.filterRow.filterTooltip
// string
// Filter
// body.editRow
// object
// {}
// Key value pair for localize edit row component
// body.editRow.deleteText
// string
// Are you sure delete this row?
// body.editRow.cancelTooltip
// string
// Cancel
// body.editRow.saveTooltip
// string
// Save
// grouping
// object
// {}
// Key value pair for localize grouping component
// grouping.placeholder
// string
// Drag headers ...
// header
// object
// {}
// Key value pair for localize header component
// header.actions
// string
// Actions
// pagination
// object
// {}
// Key value pair for localize pagination component
// pagination.labelDisplayedRows
// string
// {from}-{to} of {count}
// pagination.labelRowsSelect
// string
// rows
// pagination.labelRowsPerPage
// string
// Rows per page:
// pagination.firstAriaLabel
// string
// First Page
// pagination.firstTooltip
// string
// First Page
// pagination.previousAriaLabel
// string
// Previous Page
// pagination.previousTooltip
// string
// Previous Page
// pagination.nextAriaLabel
// string
// Next Page
// pagination.nextTooltip
// string
// Next Page
// pagination.lastAriaLabel
// string
// Last Page
// pagination.lastTooltip
// string
// Last Page
// toolbar
// object
// {}
// Key value pair for localize toolbar component
// toolbar.addRemoveColumns
// string
// Add or remove columns
// toolbar.nRowsSelected
// string
// {0} row(s) selected
// toolbar.showColumnsTitle
// string
// Show Columns
// toolbar.showColumnsAriaLabel
// string
// Show Columns
// toolbar.exportTitle
// string
// Export
// toolbar.exportAriaLabel
// string
// Export
// toolbar.exportName
// string
// Export as CSV
// toolbar.searchTooltip
// string
// Search
// toolbar.searchPlaceholder
// string
// Search
            editable={{
                onRowAdd: newData => axios
                    .post(
                        "/api/v1/projects?csrf_token=" +
                        window.csrf_token +
                        "&api_token=" +
                        window.api_token,
                        newData
                    )
                    .then(res => {
                        setState(prevState => {
                            const data = [...prevState.data];
                            data.push(res.data.data);
                            return { ...prevState, data };
                        });
                    }),
                onRowUpdate: (newData, oldData) => axios
                    .patch(
                        "/api/v1/projects/" + oldData.id + "?csrf_token=" +
                        window.csrf_token +
                        "&api_token=" +
                        window.api_token,
                        newData
                    )
                    .then(res => {
                        if (oldData) {
                            setState(prevState => {
                                const data = [...prevState.data];
                                data[data.indexOf(oldData)] = res.data.data;
                                return { ...prevState, data };
                            });
                        }
                    }),
                onRowDelete: oldData => axios
                    .delete(
                        "/api/v1/projects/" + oldData.id + "?csrf_token=" +
                        window.csrf_token +
                        "&api_token=" +
                        window.api_token
                    ).then(res => {
                        setState(prevState => {
                            const data = [...prevState.data];
                            data.splice(data.indexOf(oldData), 1);
                            return { ...prevState, data };
                        });
                    })
            }}
        />
    );
}
