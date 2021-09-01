import React, { useEffect, useState } from "react";
import DataTableComponent from '../../components/DataTableComponent';
import Header from '../../components/Header';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../common/reducers";
import { columns } from "./HomeTable.constants";
import { fetchIssuesRequest } from "./actions/homeActions";
import InputField from "../../components/InputField";
import SearchButton from "../../components/SearchButton";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";


function HomeContainer() {

  const [org, setOrg] = useState("octocat");
  const [repo, setRepo] = useState("hello-world");
  const dispatch = useDispatch();
  const { pending, issues, error } = useSelector(
    (state: RootState) => state.issues
  );

  useEffect(() => {
    dispatch(fetchIssuesRequest(org, repo));
  }, []);

  function onSearchClick(){
    if(repo.length > 0 && org.length > 0){
        dispatch(fetchIssuesRequest(org, repo));
    }
  }


  return (
    <>
      <Header name={'Home'} />
      <InputField
        placeholder={"Enter Github Organization"}
        value={org}
        setValue={setOrg}
        label={"Organization"}
      />
      <InputField
        placeholder={"Enter Organization's repository"}
        value={repo}
        setValue={setRepo}
        label={"Repository"}
      />
      <SearchButton 
        title={"Search for issues"}
        onClick={onSearchClick}
      />
      {pending ? (
        <Loader />
      ) : error ? (
        <ErrorMessage />
      ) : (
      <DataTableComponent 
        columns={columns}
        data={issues}
      />)}
    </>
  );
}

export default HomeContainer;
