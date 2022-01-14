const Page = ({ Component, Layout, ...props }) => {
    return (
        <Layout {...props}>
            <Component />
        </Layout>
    );
};

export default Page;
