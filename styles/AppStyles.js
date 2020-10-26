import colors from '../constans/colors'

export default {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.mainBackgroundColor,
        paddingTop: 70,
        paddingHorizontal: 20
    },
    header: {
        width: '100%',
    },
    title: {
        color: colors.fontColor,
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
    },
    searchMovie: {
        width: '100%',
        fontSize: 20,
        fontWeight: '300',
        padding: 20,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        marginBottom: 40
    },
    errorMessage: {
        fontSize: 17,
        color: colors.errorColor
    }
}
