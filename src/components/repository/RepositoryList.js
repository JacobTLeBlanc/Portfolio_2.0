import {RepositoryService} from "../../js/service/RepositoryService";
import React, {useState} from "react";
import Repository from "./Repository";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
const {useEffect} = require("react");
import '../../styles/repository/RepositoryList.css'
import "../../styles/common.css"

/**
 * Repository List component to render list of Repositories in Table
 *
 */
const RepositoryList = () => {

    const [repositories, setRepositories] = useState([]);
    const [page, setPage] = useState(0)
    const pageSize = 5;

    const repositoryService = new RepositoryService();
    let repositoryData;

    /**
     * Given repository data, create a list of Repository Components to render
     *
     * @param repositories JSON form of repository data
     */
    function createRepositories(repositories) {

        let newRepositories = [];

        for (let repository in repositories) {
            const currentRepo = repositories[repository];

            newRepositories.push(
                <Repository
                    key = {currentRepo.name}
                    name = {currentRepo.name}
                    description = {currentRepo.description}
                    url = {currentRepo.html_url}
                />
            )
        }

        setRepositories(newRepositories);
    }

    /**
     * Function to handle page change
     *
     * @param event   event data
     * @param newPage new page to be displayed
     */
    function onPageChange(event, newPage) {
        setPage(newPage);
    }

    /**
     * On load, get repository data from repository service
     *
     */
    useEffect(() => {
        if (repositories.length === 0) {
            repositoryService.getRepos("jacobtleblanc").then(
                (data) => {
                    repositoryData = data;
                    createRepositories(data);
                }
            )
        }
    })

    return (
        <div>
            <Paper className="paper">
                <TableContainer className="table-container" >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="table-cell-name">Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell align="right" className="table-cell-source-code" >Source Code</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {repositories.slice(
                                page * pageSize, ((page + 1) * pageSize)
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    count={repositories.length}
                    page={page}
                    onPageChange={onPageChange}
                    rowsPerPage={pageSize}
                    rowsPerPageOptions={[pageSize]}
                />
            </Paper>
        </div>
    )

}

export default RepositoryList;