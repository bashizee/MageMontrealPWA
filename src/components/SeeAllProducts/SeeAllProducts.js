/* src/components/SeeAllProducts/SeeAllProducts.js */

import React, {Fragment, useMemo} from "react";
import {useSearchPage} from "@magento/peregrine/lib/talons/SearchPage/useSearchPage";
import Gallery, {GalleryShimmer} from "@magento/venia-ui/lib/components/Gallery";
import Pagination from "@magento/venia-ui/lib/components/Pagination";
import {FormattedMessage} from "react-intl";
import {useStyle} from "@magento/venia-ui/lib/classify";
import defaultClasses from "@magento/venia-ui/lib/components/SearchPage/searchPage.module.css";
import {Meta, Title} from "@magento/venia-ui/lib/components/Head";

const hi = {
    textAlign: "center",
    margin: "1rem",
};
const wave = {
    ...hi,
    fontSize: "5rem",
};

const SeeAllProducts = () => {
    const metaLabel = "See all products"
    const classes = useStyle(defaultClasses);
    const {
        data,
        error,
        loading,
        pageControl
    } = useSearchPage();

    const content = useMemo(() => {
        if (!data && loading) {
            return (
                <Fragment>
                    <section className={classes.gallery}>
                        <GalleryShimmer
                            items={Array.from({ length: 12 }).fill(null)}
                        />
                    </section>
                    <section className={classes.pagination} />
                </Fragment>
            );
        }

        if (!data && error) {
            return (
                <div className={classes.noResult}>
                    <FormattedMessage
                        id={'searchPage.noResult'}
                        defaultMessage={
                            'No results found. The search term may be missing or invalid.'
                        }
                    />
                </div>
            );
        }

        if (!data) {
            return null;
        }

        if (data.products.items.length === 0) {
            return (
                <div className={classes.noResult} data-cy="SearchPage-noResult">
                    <FormattedMessage
                        id={'searchPage.noResultImportant'}
                        defaultMessage={'No results found!'}
                    />
                </div>
            );
        } else {
            return (
                <Fragment>
                    <section className={classes.gallery}>
                        <Gallery items={data.products.items} />
                    </section>
                    <section className={classes.pagination}>
                        <Pagination pageControl={pageControl} />
                    </section>
                </Fragment>
            );
        }
    }, [
        classes.gallery,
        classes.noResult,
        classes.pagination,
        error,
        loading,
        data,
        pageControl
    ]);

    return (
        <article>
            <div className={classes.searchContent}>
                <div className={classes.heading}>
                    <div className={classes.searchInfo}>
                        SEE ALL PRODUCTS
                    </div>
                </div>
            </div>
            {content}
            <Title>{metaLabel}</Title>
            <Meta name="title" content={metaLabel} />
            <Meta name="description" content={metaLabel} />
        </article>
    );
};

export default SeeAllProducts;
