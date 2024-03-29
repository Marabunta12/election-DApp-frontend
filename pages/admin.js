import Head from "next/head";
import React, { useState } from "react";
import Web3NotEnabled from "../components/Web3NotEnabled";
import { useMoralis, useWeb3Contract } from "react-moralis";
import styles from "../styles/admin.module.css";
import { Form, useNotification, Button } from "@web3uikit/core";
import electionAbi from "../constants/Election.json";
import networkMapping from "../constants/networkMapping.json";

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis();

    const chainString = chainId ? parseInt(chainId).toString() : "31337";
    const electionAddress = networkMapping[chainString].Election[0];

    const { runContractFunction } = useWeb3Contract();
    const dispatch = useNotification();

    const [candidateFormKey, setCandidateFormKey] = useState(100);
    const [voterFormKey, setVoterFormKey] = useState(0);

    async function addVoter(data) {
        const votersAddress = data.data[0].inputResult;

        const addVoterOptions = {
            abi: electionAbi,
            contractAddress: electionAddress,
            functionName: "addVoter",
            params: { voterAddress: votersAddress },
        };

        await runContractFunction({
            params: addVoterOptions,
            onSuccess: () => handleAddVoterSuccess(),
            onError: (error) => handleAddVoterFailure(error),
        });
        setVoterFormKey(voterFormKey + 1);
    }
    async function handleAddVoterSuccess() {
        dispatch({
            type: "success",
            message: "Added voter successfully!",
            title: "Added voter successfully!",
            position: "topR",
        });
    }
    async function handleAddVoterFailure(error) {
        console.log(error);
        dispatch({
            type: "error",
            message: "Adding voter failed",
            title: "Failed!",
            position: "topR",
        });
    }

    async function addCandidate(data) {
        const candidatesName = data.data[0].inputResult;

        const addCandidateOptions = {
            abi: electionAbi,
            contractAddress: electionAddress,
            functionName: "addCandidate",
            params: { name: candidatesName },
        };

        await runContractFunction({
            params: addCandidateOptions,
            onSuccess: () => handleAddCandidateSuccess(),
            onError: (error) => handleAddCandidateFailure(error),
        });
        setCandidateFormKey(candidateFormKey + 1);
    }
    async function handleAddCandidateSuccess() {
        dispatch({
            type: "success",
            message: "Added candidate successfully!",
            title: "Added candidate successfully!",
            position: "topR",
        });
    }
    async function handleAddCandidateFailure(error) {
        console.log(error);
        dispatch({
            type: "error",
            message: "Adding candidate failed",
            title: "Failed!",
            position: "topR",
        });
    }

    async function startElection() {
        const startElectionOptions = {
            abi: electionAbi,
            contractAddress: electionAddress,
            functionName: "startElection",
        };

        await runContractFunction({
            params: startElectionOptions,
            onSuccess: () => handleStartElectionSuccess(),
            onError: (error) => handleStartElectionFailure(error),
        });
    }
    async function handleStartElectionSuccess() {
        dispatch({
            type: "success",
            message: "Started election successfully!",
            title: "Started election successfully!",
            position: "topR",
        });
    }
    async function handleStartElectionFailure(error) {
        console.log(error);
        dispatch({
            type: "error",
            message: "Starting election failed",
            title: "Failed!",
            position: "topR",
        });
    }

    async function endElection() {
        const endElectionOptions = {
            abi: electionAbi,
            contractAddress: electionAddress,
            functionName: "endElection",
        };

        await runContractFunction({
            params: endElectionOptions,
            onSuccess: () => handleEndElectionSuccess(),
            onError: (error) => handleEndElectionFailure(error),
        });
    }
    async function handleEndElectionSuccess() {
        dispatch({
            type: "success",
            message: "Ended election successfully!",
            title: "Ended election successfully!",
            position: "topR",
        });
    }
    async function handleEndElectionFailure(error) {
        console.log(error);
        dispatch({
            type: "error",
            message: "Ending election failed",
            title: "Failed!",
            position: "topR",
        });
    }

    return (
        <div>
            <Head>
                <title>Election DApp (Admin Page)</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {isWeb3Enabled ? (
                    <div className={styles.mainContainer}>
                        <Form
                            key={voterFormKey}
                            buttonConfig={{
                                text: "Add",
                                theme: "primary",
                            }}
                            data={[
                                {
                                    name: "Enter voter's address",
                                    type: "text",
                                    key: "votersAddress",
                                },
                            ]}
                            title="Add voter"
                            onSubmit={addVoter}
                        />
                        <Form
                            key={candidateFormKey}
                            buttonConfig={{
                                text: "Add",
                                theme: "primary",
                            }}
                            data={[
                                {
                                    name: "Enter candidate's name",
                                    type: "text",
                                    key: "candidatesName",
                                },
                            ]}
                            title="Add candidate"
                            onSubmit={addCandidate}
                        />
                        <div className={styles.buttonContainer}>
                            <Button onClick={startElection} text="Start election" theme="primary" />
                            <Button onClick={endElection} text="End election" theme="primary" />
                        </div>
                    </div>
                ) : (
                    <Web3NotEnabled></Web3NotEnabled>
                )}
            </div>
        </div>
    );
}
