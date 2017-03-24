
class ListStore {
    constructor(storePrefix) {
        this.STORE_PREFIX = storePrefix;
        this.STORE_INDEX_RECORD = storePrefix + 'Ids';
        this.jsStore = [];
    }
    getName(id) {
        return this.STORE_PREFIX + '#' + id;
    }
    getIds() {
        return (localStorage.getItem(this.STORE_INDEX_RECORD) || '').split(',');
    }
    isItUsed() {
        return typeof localStorage.getItem(this.STORE_INDEX_RECORD) === 'string';
    }
    getNextId() {
        var ids = this.getIds();
        ids = ids.map(id => parseInt(id, 10) || 0);
        return (Math.max.apply(null, ids) || 0) + 1;
    }
    removeItem(id) {
        const ids = this.getIds();
        const indexOfId = ids.indexOf(String(id));
        if (~indexOfId) {
            ids.splice(indexOfId, 1);
        }
        try {
            localStorage.setItem(this.STORE_INDEX_RECORD, ids.filter(item => item).join(','));
            localStorage.removeItem(this.getName(id));
        } catch (error) {}
    }
    setItem(item) {
        const id = item.id;
        try {
            localStorage.setItem(this.getName(id), JSON.stringify(item));
        } catch (error) {
            this.jsStore.push(item);
        }
        const ids = this.getIds();
        try {
            if (!~ids.indexOf(String(id))) {
                ids.push(id);
                localStorage.setItem(this.STORE_INDEX_RECORD, ids.filter(item => item).join(','));
            }
        } catch (error) {}
    }
    getItem(id) {
        var result;
        try {
            result = JSON.parse(localStorage.getItem(this.getName(id)));
        } catch (error) {}
        if (!result) {
            result = this.jsStore.find(item => item.id === id);
        }
        return result;
    }
    getAll() {
        const ids = this.getIds().filter(id => id);
        const items = ids.map(id => this.getItem(id));
        return items.concat(this.jsStore);
    }
}

export default ListStore;