import colors from "../constans/colors"

export default {
    modalUp: {
        padding: 20,
        flex: 1,
        backgroundColor: colors.mainBackgroundColor,
        // justifyContent: "space-between"
    },
    title: {
        color: colors.fontColor,
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 5
    },
    rating: {
        marginBottom: 20,
        color: colors.fontColor,
        fontSize: 16
    },
    plot: {
        marginBottom: 20,
        fontStyle: 'italic',
        color: colors.fontColor,
        fontSize: 15
    },
    imageMovie: {
        width: '100%',
        height: 300,
    },
    closeBtn: {
        padding: 20,
        fontSize: 20,
        color: colors.fontColor,
        fontWeight: '700',
        backgroundColor: colors.barColor,
    }
};