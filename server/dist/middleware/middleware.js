export function requestLogger(rq, rs, next) {
    console.log(`${rq.method} request sent to ${rq.path}`);
    next();
}
export const globalError = (err, _rq, rs, _next) => {
    rs.status(err.status || 500).json({ error: err.message });
};
//# sourceMappingURL=middleware.js.map