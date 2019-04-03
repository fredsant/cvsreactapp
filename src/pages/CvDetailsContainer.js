import React from 'react';

import CvDetails from './CvDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';

class CvDetailsContainer extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
    };

    componentDidMount () {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error:null});

        try {
            const data = await api.cvs.read(
                this.props.match.params.cvId
            );
            this.setState ({loading: false, data: data});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    handleOpenModal = e => {
        this.setState({modalIsOpen: true});
    };

    handleCloseModal = e => {
        this.setState({modalIsOpen: false});
    };

    handleDeleteCv = async e => {
        this.setState({loading: true, error: null});

        try{
            await api.cvs.remove(
                this.props.match.params.cvId
            );

            this.props.history.push('/cvs');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    render () {
        if(this.state.loading) {
            return <PageLoading />
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        const cv = this.state.data;

        return (
            <CvDetails 
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteCv={this.handleDeleteCv}
                cv={this.state.data} />
        );
    }
}

export default CvDetailsContainer;