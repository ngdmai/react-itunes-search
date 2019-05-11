export function getArtwork(artWorkUrl: string): string {
  return artWorkUrl.replace('100x100', '600x600');
}

export function getMovieRuntime(duration: number): string {
  if (!duration) {
    return '';
  }

  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  const hoursAsString = hours === 1 ? hours + ' Stunde' : hours + ' Stunden';
  const minutesAsString =
    minutes === 1 ? minutes + ' Minuten' : minutes + ' Minute';

  return hoursAsString + ' ' + minutesAsString;
}

export function getReleaseYear(releaseDate: string): number {
  return new Date(releaseDate).getFullYear();
}

export function getTrackRentalPrice(
  trackRentalPrice: string,
  currency: string
): string {
  return trackRentalPrice ? `Leihen: ${currency} ${trackRentalPrice}, ` : '';
}

export function getPurchasePrice(
  purchasePrice: string,
  currency: string
): string {
  return purchasePrice ? `Kaufen: ${currency} ${purchasePrice}` : '';
}
