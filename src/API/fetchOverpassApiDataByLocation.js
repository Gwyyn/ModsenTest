import toast from "bootstrap/js/src/toast";

export const fetchOverpassApiDataByLocation = async (
    tag,
    radius,
    lat,
    lng
) => {
    const controller = new AbortController();
    const query =
        `[out:json];
        (
          node[${tag}](around:${radius * 1000},${lat},${lng});
        );
        out center;`;

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, 5000);
    const response = await fetch(
        `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
            query
        )}`,
        {signal: controller.signal}
    );

    clearTimeout(timeoutId);

    if (response.ok) {
        const data = await response.json();
        return data.elements;
    }

    toast.error('Не удалось найти объект. Попробуйте снова.');
    return undefined;
};
